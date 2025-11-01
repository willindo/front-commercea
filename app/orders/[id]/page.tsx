"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { api } from "@/lib/api/axios";

export default function OrderSuccessPage() {
  const { id } = useParams();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    api
      .get(`/orders/${id}`)
      .then((res) => setOrder(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading order...</p>;
  if (!order) return <p>Order not found</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-green-600 mb-2">
        Payment Successful 🎉
      </h1>
      <p className="text-gray-600 mb-4">Order ID: {order.id}</p>

      <div className="border rounded p-4">
        <p>
          <strong>Status:</strong> {order.paymentStatus}
        </p>
        <p>
          <strong>Total:</strong> ₹{Number(order.totalAmount)}
        </p>
        <p>
          <strong>Currency:</strong> {order.currency}
        </p>
      </div>
    </div>
  );
}
