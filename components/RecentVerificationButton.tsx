"use client";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export function ResendVerificationButton() {
  const [loading, setLoading] = useState(false);

  const resendVerification = async () => {
    setLoading(true);
    try {
      await axios.post("/api/auth/resend-verification");
      toast.success("Verification email sent!");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to send email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={resendVerification}
      disabled={loading}
      className="ml-2 underline text-blue-600 hover:text-blue-800 disabled:opacity-50"
    >
      {loading ? "Sending..." : "Resend verification"}
    </button>
  );
}
