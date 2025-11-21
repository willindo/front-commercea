"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function VerifyEmailPage() {
  const router = useRouter();
  const params = useSearchParams();
  const token = params.get("token");

  const [message, setMessage] = useState("Verifying your email...");
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  useEffect(() => {
    if (!token) {
      setMessage("Invalid verification link.");
      setStatus("error");
      return;
    }

    const verify = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/verify-email?token=${token}`,
          { withCredentials: true }
        );

        setMessage(res.data.message);
        toast.success(res.data.message);
        setStatus("success");

        setTimeout(() => {
          router.replace("/auth/login?verified=1");
        }, 1500);
      } catch (err: any) {
        const msg = err.response?.data?.message || "Verification link expired.";

        setMessage(msg);
        toast.error(msg);
        setStatus("error");

        // If expired → send back to register
        setTimeout(() => {
          router.replace("/auth/register");
        }, 2000);
      }
    };

    verify();
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1
        className={`text-xl font-semibold ${
          status === "success"
            ? "text-green-600"
            : status === "error"
            ? "text-red-600"
            : "text-gray-700"
        }`}
      >
        {message}
      </h1>
    </div>
  );
}
