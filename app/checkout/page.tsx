// /home/badsha/dev/front-commerce/app/checkout/page.tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function CheckoutPage() {
  const params = useSearchParams();
  const orderId = params.get("order");

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Order Created 🎉</h1>
      <p>
        Your order ID is <b>{orderId}</b>.
      </p>
      <p className="mt-2">Proceed to payment to complete your order.</p>
      <button
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg"
        onClick={() => (window.location.href = `/payment?order=${orderId}`)}
      >
        Go to Payment
      </button>
    </div>
  );
}
