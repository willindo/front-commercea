"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api/axios"; // adjust import path if needed
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
  console.log("Checkout data:", checkoutData);
  const [loading, setLoading] = useState(false);
  const { cart } = useCart();
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
      // The backend startCheckout uses the user's cart (server-side) and returns orderId & finalAmount.
      // If your /checkout endpoint accepts coupon/gift fields, include them here if needed.
      let checkoutResp;
      try {
        const res = await api.post("/checkout", {
          // If your backend expects anything in body, pass it.
          // The controller currently ignores the body and uses server cart for userId,
          // but sending an empty object is OK.
          cartId: cart?.id,
          // totalAmount,
        });
        console.log("Checkout response:", res.data);
        checkoutResp = res.data;
      } catch (err: any) {
        console.error(
          "Failed to create internal order (/checkout)",
          err?.response?.data ?? err
        );
        const msg =
          err?.response?.data?.message ||
          err?.message ||
          "Failed to create internal order";
        throw new Error(msg);
      }

      const internalOrderId = checkoutResp.orderId;
      const finalAmount = checkoutResp.finalAmount;

      if (!internalOrderId || finalAmount == null) {
        console.error("Unexpected /checkout response:", checkoutResp);
        throw new Error("Invalid response from server when creating order");
      }

      // ---------------------------
      // STEP B: Create Razorpay order linked to internal order
      // ---------------------------
      // PaymentsController expects { orderId, amount }
      let rpOrder;
      try {
        // amount parameter expected in rupees by your PaymentsController.createOrder
        // createOrderForInternalOrder converts to paise internally.
        const { data } = await api.post("/payments/create-order", {
          orderId: internalOrderId,
          amount: finalAmount,
        });
        rpOrder = data;
      } catch (err: any) {
        console.error(
          "Failed creating razorpay order (/payments/create-order)",
          err?.response?.data ?? err
        );
        const serverMsg =
          err?.response?.data?.message || err?.response?.data || err?.message;
        throw new Error(serverMsg || "Failed to create Razorpay order");
      }

      // rpOrder should contain razorpayOrderId or id depending on implementation.
      // Your PaymentsService returns { razorpayOrderId, amount, currency }
      const razorpayOrderId =
        rpOrder.razorpayOrderId ?? rpOrder.id ?? rpOrder.order_id;
      const rpAmount =
        rpOrder.amount ?? rpOrder.amountInPaise ?? finalAmount * 100;
      const rpCurrency = rpOrder.currency ?? "INR";

      if (!razorpayOrderId) {
        console.error("Unexpected payments/create-order response:", rpOrder);
        throw new Error("Invalid response from payments/create-order");
      }

      // ---------------------------
      // STEP C: Open Razorpay checkout
      // ---------------------------
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: rpAmount, // amount in paise
        currency: rpCurrency,
        name: "Front Commerce",
        description: "Order Payment",
        order_id: razorpayOrderId,
        // pass internal order id in notes or handler payload as needed
        // (Razorpay will return razorpay_order_id + razorpay_payment_id + razorpay_signature)
        handler: async function (response: any) {
          try {
            // Add internal order id to the verify payload
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
              // Clear checkout state and redirect to order success
              sessionStorage.removeItem("checkoutData");
              window.location.href = `/orders/${internalOrderId}?status=success`;
            } else {
              console.error("Verification returned false:", verify);
              alert("Payment verification failed on server.");
            }
          } catch (err: any) {
            console.error(
              "Error verifying payment:",
              err?.response?.data ?? err
            );
            alert("Payment verification failed.");
          }
        },
        prefill: {
          name: "Badsha Noordeen",
          email: "badsha@example.com",
          contact: "9999999999",
        },
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
      // show the server message if provided
      const userMsg =
        err?.response?.data?.message ||
        err?.message ||
        "Payment initiation failed";
      alert(userMsg);
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

      <ConfirmButton onClick={handlePayment} loading={loading} />
    </div>
  );
}
