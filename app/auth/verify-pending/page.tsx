"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { api } from "@/lib/api/axios";

export default function VerifyPendingPage() {
  const params = useSearchParams();
  const email = params.get("email") || "";

  const [resending, setResending] = useState(false);

  const resend = async () => {
    if (resending) return;
    setResending(true);

    try {
      const res = await api.post("/auth/resend-verification", { email });
      toast.success(res.data.message);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to resend");
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-xl font-medium mb-4">
        Please check your inbox to verify your email.
      </h1>

      <p className="text-gray-600 mb-6">
        Verification email sent to <b>{email}</b>
      </p>

      <button
        onClick={resend}
        disabled={resending}
        className="px-6 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        {resending ? "Resending..." : "Resend Email"}
      </button>
    </div>
  );
}
