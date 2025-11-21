"use client";

import { useAuth } from "@/context/AuthContext";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const { login } = useAuth();
  const params = useSearchParams();
  const verified = params.get("verified");

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      await login(form);
      toast.success("Logged in!");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-16">
      {verified && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Email verified! You may now log in.
        </div>
      )}

      <h1 className="text-2xl font-semibold mb-6">Sign In</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="email"
          placeholder="Email"
          className="w-full border px-4 py-2 rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-2 rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-black text-white rounded disabled:opacity-40"
        >
          {loading ? "Checking..." : "Login"}
        </button>
      </form>
    </div>
  );
}
