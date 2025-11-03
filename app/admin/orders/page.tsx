"use client";
import { useEffect, useState } from "react";
import { api } from "@/lib/api/axios";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await api.get("/orders/admin"); // 🔹 use admin endpoint
        setOrders(res.data);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <p className="p-6">Loading orders…</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Orders</h1>

      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Payment</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{o.id.slice(0, 8)}…</td>
                <td className="p-3">{o.user?.email}</td>
                <td className="p-3">₹{Number(o.totalAmount)}</td>
                <td className="p-3">{o.paymentStatus}</td>
                <td className="p-3">{o.status}</td>
                <td className="p-3">
                  {dayjs(o.createdAt).format("DD MMM YYYY")}
                </td>
                <td className="p-3 text-right">
                  <button
                    className="px-3 py-1 text-sm border rounded hover:bg-gray-100"
                    onClick={() => router.push(`/orders/${o.id}`)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
