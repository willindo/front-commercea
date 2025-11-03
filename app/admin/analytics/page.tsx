"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api/axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

type AnalyticsResponse = { date: string; total: number }[];

export default function AdminAnalyticsPage() {
  const [data, setData] = useState<{ date: string; total: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [summary, setSummary] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    avgOrderValue: 0,
  });

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await api.get<AnalyticsResponse>("/orders/overview");
        const entries = res.data.sort((a, b) => (a.date > b.date ? 1 : -1));

        const totalRevenue = entries.reduce((sum, x) => sum + x.total, 0);
        const totalOrders = entries.length;
        const avgOrderValue = totalOrders ? totalRevenue / totalOrders : 0;

        setSummary({ totalRevenue, totalOrders, avgOrderValue });
        setData(entries);
      } catch (err: any) {
        console.error(err);
        setError("Failed to load analytics data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) return <p className="p-6">Loading analytics…</p>;
  if (error)
    return (
      <div className="p-6 text-red-500">
        <p>{error}</p>
      </div>
    );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Sales Analytics</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-6 border rounded-xl shadow-sm bg-white"
        >
          <h2 className="text-gray-500 text-sm">Total Revenue</h2>
          <p className="text-2xl font-bold mt-2">
            ₹{summary.totalRevenue.toFixed(2)}
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-6 border rounded-xl shadow-sm bg-white"
        >
          <h2 className="text-gray-500 text-sm">Total Orders</h2>
          <p className="text-2xl font-bold mt-2">{summary.totalOrders}</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-6 border rounded-xl shadow-sm bg-white"
        >
          <h2 className="text-gray-500 text-sm">Avg. Order Value</h2>
          <p className="text-2xl font-bold mt-2">
            ₹{summary.avgOrderValue.toFixed(2)}
          </p>
        </motion.div>
      </div>

      {/* Line Chart */}
      <div className="p-6 border rounded-xl bg-white shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Revenue Over Time</h2>

        {data.length === 0 ? (
          <p className="text-gray-500">No analytics data available.</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip formatter={(value) => `₹${value}`} />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#2563eb"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
