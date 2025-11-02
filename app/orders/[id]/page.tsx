"use client";

import { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { api } from "@/lib/api/axios"; // your axios instance
import dayjs from "dayjs";

type OrderItem = {
  id: string;
  productId: string;
  productName: string;
  productImage?: string | null;
  quantity: number;
  priceAtPurchase: string | number;
  size?: string | null;
};

type Order = {
  id: string;
  userId?: string;
  paymentStatus: string;
  status: string;
  totalAmount: string | number;
  currency: string;
  discountAmount?: string | number;
  taxAmount?: string | number;
  shippingCost?: string | number;
  createdAt: string;
  address?: {
    line1: string;
    line2?: string | null;
    city: string;
    state: string;
    postalCode: string;
    country?: string;
  } | null;
  items: OrderItem[];
};

export default function OrderSuccessPage() {
  const { id } = useParams();
  const router = useRouter();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const pollingRef = useRef<number | null>(null);
  const analyticsSent = useRef(false);

  // fetch order from server
  const fetchOrder = async () => {
    try {
      setError(null);
      const res = await api.get(`/orders/${id}`);
      setOrder(res.data);
    } catch (err: any) {
      console.error("fetchOrder error", err);
      setError(
        err?.response?.data?.message ?? "Failed to load order. Try again."
      );
      setOrder(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetchOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // clear client-side cart (localStorage or app context). Safe to call repeatedly.
  useEffect(() => {
    // only clear once when we have a PAID order shown
    if (!order) return;
    try {
      if (order.paymentStatus === "PAID" || order.status === "PAID") {
        // adapt to your client cart key/name
        try {
          localStorage.removeItem("cart");
        } catch (e) {
          /* ignore if storage blocked */
        }
      }
    } catch (e) {}
  }, [order]);

  // Poll order status for a short window (e.g., 5 attempts every 4s = 20s)
  useEffect(() => {
    if (!id) return;
    let attempts = 0;
    const maxAttempts = 5;
    const intervalMs = 4000;

    const poll = async () => {
      attempts++;
      try {
        const res = await api.get(`/orders/${id}`);
        setOrder(res.data);
        // stop if settled to a non-pending/payment state
        if (
          res.data.paymentStatus === "PAID" ||
          res.data.status === "PROCESSING" ||
          res.data.status === "PAID"
        ) {
          if (pollingRef.current) {
            window.clearInterval(pollingRef.current);
            pollingRef.current = null;
          }
        }
      } catch (e) {
        // swallow; we'll stop after attempts
      }
      if (attempts >= maxAttempts && pollingRef.current) {
        window.clearInterval(pollingRef.current);
        pollingRef.current = null;
      }
    };

    // start polling only if order exists and is still pending
    if (order && order.paymentStatus === "PENDING") {
      pollingRef.current = window.setInterval(poll, intervalMs);
    }

    return () => {
      if (pollingRef.current) {
        window.clearInterval(pollingRef.current);
        pollingRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, order?.paymentStatus]);

  // track analytics on mount (only once)
  useEffect(() => {
    if (!order || analyticsSent.current) return;
    try {
      // replace with your analytics SDK call
      // window.dataLayer?.push({ event: 'order_placed', orderId: order.id, value: Number(order.totalAmount) });
      analyticsSent.current = true;
    } catch (e) {}
  }, [order]);

  if (loading) return <p className="p-6">Loading your order…</p>;
  if (error)
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => fetchOrder()}
        >
          Retry
        </button>
      </div>
    );
  if (!order)
    return (
      <div className="p-6 max-w-3xl mx-auto text-center">
        <p>Order not found.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => router.push("/orders")}
        >
          My Orders
        </button>
      </div>
    );

  const downloadInvoice = async () => {
    try {
      setDownloading(true);
      const res = await api.get(`/orders/${order.id}/invoice`, {
        responseType: "blob",
      });
      const blob = new Blob([res.data], {
        type: res.data.type || "application/pdf",
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `invoice_${order.id}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("downloadInvoice", err);
      alert("Failed to download invoice. Try again.");
    } finally {
      setDownloading(false);
    }
  };

  const copyOrderId = async () => {
    try {
      await navigator.clipboard.writeText(order.id);
      // show a toast in your app instead
      alert("Order id copied to clipboard");
    } catch {
      // fallback
      prompt("Copy the order id", order.id);
    }
  };

  const createdAt = dayjs(order.createdAt).format("DD MMM YYYY, h:mm A");

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-green-600 mb-2">
        Payment Successful 🎉
      </h1>

      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-gray-600">Order ID:</p>
          <p className="font-mono">{order.id}</p>
          <p className="text-sm text-gray-500">Placed on {createdAt}</p>
        </div>

        <div className="space-x-2">
          <button
            onClick={copyOrderId}
            className="px-3 py-1 border rounded text-sm"
          >
            Copy ID
          </button>
          <button
            onClick={() => router.push(`/orders/${order.id}`)}
            className="px-3 py-1 border rounded text-sm"
          >
            View Order
          </button>
          <button
            onClick={downloadInvoice}
            disabled={downloading}
            className="px-3 py-1 bg-gray-800 text-white rounded text-sm"
          >
            {downloading ? "Preparing..." : "Download Invoice"}
          </button>
        </div>
      </div>

      <div className="border rounded p-4 mb-4">
        <p>
          <strong>Status:</strong> {order.status} / {order.paymentStatus}
        </p>
        <p>
          <strong>Total:</strong> ₹{Number(order.totalAmount)}
        </p>
        <p>
          <strong>Payment:</strong>{" "}
          {order.paymentStatus === "PAID"
            ? "Payment received"
            : order.paymentStatus}
        </p>
      </div>

      {order.address && (
        <div className="border rounded p-4 mb-4">
          <h2 className="font-semibold mb-2">Shipping Address</h2>
          <address className="not-italic text-sm">
            <div>{order.address.line1}</div>
            {order.address.line2 && <div>{order.address.line2}</div>}
            <div>
              {order.address.city}, {order.address.state}{" "}
              {order.address.postalCode}
            </div>
            <div>{order.address.country}</div>
          </address>
        </div>
      )}

      <div className="border rounded p-4 mb-6">
        <h2 className="font-semibold mb-2">Items</h2>
        <ul className="space-y-3">
          {order.items.map((item) => (
            <li key={item.id} className="flex gap-4 items-center">
              <img
                src={item.productImage ?? "/images/placeholder.png"}
                alt={item.productName}
                width={64}
                height={64}
                className="object-cover rounded"
              />
              <div className="flex-1">
                <div className="font-medium">{item.productName}</div>
                <div className="text-sm text-gray-500">{item.size ?? ""}</div>
                <div className="text-sm text-gray-600">
                  Qty: {item.quantity}
                </div>
              </div>
              <div className="font-medium">₹{Number(item.priceAtPurchase)}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3 justify-center">
        <button
          className="px-4 py-2 bg-green-600 text-white rounded"
          onClick={() => router.push("/shop")}
        >
          Continue Shopping
        </button>

        <button
          className="px-4 py-2 border rounded"
          onClick={() => router.push("/orders")}
        >
          My Orders
        </button>
      </div>
    </div>
  );
}
