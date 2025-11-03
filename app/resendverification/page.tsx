"use client";
// apps/frontend/pages/resend-verification.tsx
import { useState } from "react";

export default function ResendVerification() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/resend-verification`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );

    const data = await res.json();
    setStatus("done");
    setMessage(data.message || "Check your inbox.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-2xl shadow-md bg-white w-96"
      >
        <h2 className="text-xl font-semibold mb-4">
          Resend Verification Email
        </h2>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-md w-full px-3 py-2 mb-3"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          {status === "loading" ? "Sending..." : "Send Link"}
        </button>
        {message && <p className="mt-3 text-sm text-center">{message}</p>}
      </form>
    </div>
  );
}
