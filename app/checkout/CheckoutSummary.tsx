"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api/axios";
import ConfirmButton from "./ConfirmButton";
import { useCart } from "@/hooks/useCart";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutSummary({
  checkoutData,
}: {
  checkoutData: {
    items: {
      id: string;
      name: string;
      price: number;
      quantity: number;
      size?: string;
    }[];
    totalPrice: number;
  };
}) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null); // will hold logged-in user or null
  const [guest, setGuest] = useState({
    name: "",
    email: "",
    contact: "",
  });
  const { cart } = useCart();

  // Try fetching user info from backend (JWT authenticated)
  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/auth/me"); // backend route returns {id, name, email, phone}
        setUser(res.data);
      } catch {
        setUser(null); // not logged in
      }
    })();
  }, []);

  const handlePayment = async () => {
    try {
      setLoading(true);

      if (!checkoutData || checkoutData.totalPrice <= 0) {
        alert("Cart is empty or invalid total");
        return;
      }

      // ---------------------------
      // STEP A: Create internal order
      // ---------------------------
      let checkoutResp;
      try {
        const res = await api.post("/checkout", {
          cartId: cart?.id,
          customer: user
            ? undefined
            : {
                name: guest.name,
                email: guest.email,
                contact: guest.contact,
              },
        });
        checkoutResp = res.data;
      } catch (err: any) {
        console.error("Failed to create internal order:", err);
        throw new Error(
          err?.response?.data?.message || "Failed to create internal order"
        );
      }

      const internalOrderId = checkoutResp.orderId;
      const finalAmount = checkoutResp.finalAmount;

      if (!internalOrderId || finalAmount == null) {
        throw new Error("Invalid response from /checkout");
      }

      // ---------------------------
      // STEP B: Create Razorpay order
      // ---------------------------
      let rpOrder;
      try {
        const { data } = await api.post("/payments/create-order", {
          orderId: internalOrderId,
          amount: finalAmount,
        });
        rpOrder = data;
      } catch (err: any) {
        throw new Error(
          err?.response?.data?.message ||
            err?.message ||
            "Failed to create Razorpay order"
        );
      }

      const razorpayOrderId =
        rpOrder.razorpayOrderId ?? rpOrder.id ?? rpOrder.order_id;
      const rpAmount =
        rpOrder.amount ?? rpOrder.amountInPaise ?? finalAmount * 100;
      const rpCurrency = rpOrder.currency ?? "INR";

      // ---------------------------
      // STEP C: Open Razorpay checkout
      // ---------------------------
      const prefillUser = user
        ? {
            name: user.name || "User",
            email: user.email || "",
            contact: user.phone || "",
          }
        : {
            name: guest.name || "Guest",
            email: guest.email || "",
            contact: guest.contact || "",
          };

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: rpAmount,
        currency: rpCurrency,
        name: "Front Commerce",
        description: "Order Payment",
        order_id: razorpayOrderId,
        handler: async function (response: any) {
          try {
            const payload = {
              orderId: internalOrderId,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            };

            const { data: verify } = await api.post(
              "/payments/verify",
              payload
            );

            if (verify.success) {
              sessionStorage.removeItem("checkoutData");
              window.location.href = `/orders/${internalOrderId}?status=success`;
            } else {
              alert("Payment verification failed on server.");
            }
          } catch (err) {
            console.error("Error verifying payment:", err);
            alert("Payment verification failed.");
          }
        },
        prefill: prefillUser,
        theme: { color: "#3399cc" },
      };

      if (typeof window !== "undefined") {
        if (!window.Razorpay) {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          script.onload = () => {
            const rzp = new window.Razorpay(options);
            rzp.open();
          };
          document.body.appendChild(script);
        } else {
          const rzp = new window.Razorpay(options);
          rzp.open();
        }
      }
    } catch (err: any) {
      console.error("Payment initiation failed:", err);
      alert(err?.message || "Payment initiation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="border rounded-lg p-4 bg-gray-50">
        {checkoutData.items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between py-2 border-b last:border-none"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">
                Qty: {item.quantity} × ₹{item.price}
              </p>
            </div>
            <p className="font-semibold">₹{item.price * item.quantity}</p>
          </div>
        ))}
        <div className="flex justify-between mt-3 pt-3 border-t font-bold text-lg">
          <span>Total</span>
          <span>₹{checkoutData.totalPrice}</span>
        </div>
      </div>

      {!user && (
        <div className="space-y-2 border p-3 rounded-md bg-white">
          <h3 className="font-semibold text-gray-700">Guest Checkout</h3>
          <input
            type="text"
            placeholder="Full name"
            value={guest.name}
            onChange={(e) => setGuest({ ...guest, name: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={guest.email}
            onChange={(e) => setGuest({ ...guest, email: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <input
            type="tel"
            placeholder="Phone number"
            value={guest.contact}
            onChange={(e) => setGuest({ ...guest, contact: e.target.value })}
            className="border p-2 rounded w-full"
          />
        </div>
      )}

      <ConfirmButton onClick={handlePayment} loading={loading} />
    </div>
  );
}
