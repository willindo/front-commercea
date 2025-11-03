"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api/axios";
import dayjs from "dayjs";

type Order = {
  id: string;
  paymentStatus: string;
  status: string;
  totalAmount: string | number;
  currency: string;
  createdAt: string;
  items?: {
    product: { name: string; image?: string | null };
  }[];
};

export default function OrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrders = async () => {
    try {
      setError(null);
      setLoading(true);
      const res = await api.get("/orders");
      setOrders(res.data);
    } catch (err: any) {
      console.error("fetchOrders error", err);
      setError(err?.response?.data?.message ?? "Failed to load orders.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <p className="p-6">Loading your orders…</p>;
  if (error)
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={fetchOrders}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Retry
        </button>
      </div>
    );

  if (orders.length === 0)
    return (
      <div className="p-6 text-center">
        <h2 className="text-lg font-semibold mb-2">No orders yet</h2>
        <p className="text-gray-500 mb-4">You haven’t placed any orders yet.</p>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded"
          onClick={() => router.push("/shop")}
        >
          Go to Shop
        </button>
      </div>
    );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      <div className="border rounded-lg divide-y">
        {orders.map((order) => {
          const createdAt = dayjs(order.createdAt).format(
            "DD MMM YYYY, h:mm A"
          );
          const statusColor =
            order.paymentStatus === "PAID"
              ? "text-green-600"
              : order.paymentStatus === "PENDING"
              ? "text-yellow-600"
              : "text-red-600";

          const firstItem = order.items?.[0]?.product;
          return (
            <div
              key={order.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                {firstItem?.image && (
                  <img
                    src={firstItem.image}
                    alt={firstItem.name}
                    width={64}
                    height={64}
                    className="rounded object-cover border"
                  />
                )}
                <div>
                  <p className="font-medium">
                    Order #{order.id.slice(0, 8)}...
                  </p>
                  <p className="text-sm text-gray-500">{createdAt}</p>
                  <p className={`text-sm font-medium ${statusColor}`}>
                    {order.paymentStatus} / {order.status}
                  </p>
                </div>
              </div>

              <div className="mt-3 sm:mt-0 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="text-right">
                  <p className="font-semibold text-gray-800">
                    ₹{Number(order.totalAmount)}
                  </p>
                  <p className="text-xs text-gray-500">{order.currency}</p>
                </div>

                <button
                  className="px-3 py-1 border rounded text-sm hover:bg-gray-100"
                  onClick={() => router.push(`/orders/${order.id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
