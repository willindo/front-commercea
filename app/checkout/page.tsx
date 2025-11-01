"use client";

import { useEffect, useState } from "react";
import CheckoutSummary from "./heckoutSummary";

export default function CheckoutPage() {
  const [checkoutData, setCheckoutData] = useState<any>(null);

  useEffect(() => {
    const data = sessionStorage.getItem("checkoutData");
    if (data) {
      setCheckoutData(JSON.parse(data));
    } else {
      window.location.href = "/cart";
    }
  }, []);
  if (!checkoutData) return <p>Loading checkout...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      <CheckoutSummary checkoutData={checkoutData} />
      <pre className="bg-gray-50 p-3 rounded">
        {JSON.stringify(checkoutData, null, 2)}
      </pre>
    </div>
  );
}
