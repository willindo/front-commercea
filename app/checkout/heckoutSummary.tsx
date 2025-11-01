"use client";

import { useState } from "react";
import { api } from "@/lib/api/axios"; // your axios client
import ConfirmButton from "./ConfirmButton";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const { cart } = useCart();

  const handlePayment = async () => {
    if (!checkoutData || checkoutData.totalPrice <= 0) {
      toast.error("Cart empty or invalid total");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Starting checkout...");

    try {
      // STEP A: Create internal order (server will use user's cart server-side)
      const { data: checkoutResp } = await api.post("/checkout", {
        // include any optional fields (coupon/gift) if you support them
        // send cartId if your endpoint requires it; otherwise server picks from user session
        cartId: cart?.id,
      });

      if (!checkoutResp?.orderId) {
        throw new Error("Invalid server response when creating order");
      }

      toast.success("Order created", { id: toastId });

      // STEP B: Ask backend to create Razorpay order for this internal order
      toast.loading("Creating payment order...", { id: toastId });
      const { data: rpResp } = await api.post("/payments/create-order", {
        orderId: checkoutResp.orderId,
        amount:
          checkoutResp.finalAmount ??
          checkoutResp.finalAmount ??
          checkoutData.totalPrice,
      });

      // rpResp should include razorpayOrderId (or id), amount in paise, currency
      const razorpayOrderId =
        rpResp.razorpayOrderId ?? rpResp.id ?? rpResp.order_id;
      const rpAmount =
        rpResp.amount ??
        rpResp.amountInPaise ??
        Math.round((checkoutResp.finalAmount ?? checkoutData.totalPrice) * 100);
      const rpCurrency = rpResp.currency ?? "INR";

      if (!razorpayOrderId) throw new Error("Invalid Razorpay order response");

      toast.success("Payment order ready", { id: toastId });

      // STEP C: Prepare Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: rpAmount,
        currency: rpCurrency,
        name: "Front Commerce",
        description: `Order ${checkoutResp.orderId}`,
        order_id: razorpayOrderId,
        prefill: {
          name:
            typeof window !== "undefined" && localStorage.getItem("user")
              ? JSON.parse(localStorage.getItem("user")!).name
              : undefined,
          email:
            typeof window !== "undefined" && localStorage.getItem("user")
              ? JSON.parse(localStorage.getItem("user")!).email
              : undefined,
        },
        notes: {
          internal_order_id: checkoutResp.orderId,
        },
        theme: { color: "#111827" }, // brand color
        handler: async (response: any) => {
          // STEP D: Verify on server
          toast.loading("Verifying payment...", { id: toastId });
          try {
            const payload = {
              orderId: checkoutResp.orderId,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            };

            const { data: verify } = await api.post(
              "/payments/verify",
              payload
            );

            if (verify?.success) {
              toast.success("Payment verified!", { id: toastId });
              // clear client cart storage
              sessionStorage.removeItem("checkoutData");
              localStorage.removeItem("cart"); // if you store cart in localStorage
              // redirect to final order page
              router.push(`/orders/${checkoutResp.orderId}?status=success`);
            } else {
              toast.error("Verification failed on server", { id: toastId });
            }
          } catch (err: any) {
            console.error("Verification error", err);
            toast.error(
              err?.response?.data?.message ?? "Payment verification failed",
              { id: toastId }
            );
          }
        },
        // Optional: events for failures / modal closed
        modal: {
          ondismiss: function () {
            toast("Payment window closed", { icon: "⚠️" });
          },
        },
      };

      // STEP E: Load script & open modal
      if (typeof window !== "undefined") {
        if (!window.Razorpay) {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          script.onload = () => new window.Razorpay(options).open();
          document.body.appendChild(script);
        } else {
          new window.Razorpay(options).open();
        }
      }
    } catch (err: any) {
      console.error("Payment initiation failed:", err);
      toast.error(
        err?.response?.data?.message ??
          err?.message ??
          "Payment initiation failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="border rounded-lg p-4 bg-white shadow-sm">
        {checkoutData.items.map((it) => (
          <div
            key={it.id}
            className="flex justify-between py-2 border-b last:border-none"
          >
            <div>
              <div className="font-medium">{it.name}</div>
              <div className="text-sm text-gray-500">
                Qty: {it.quantity} × ₹{it.price}
              </div>
            </div>
            <div className="font-semibold">₹{it.quantity * it.price}</div>
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
