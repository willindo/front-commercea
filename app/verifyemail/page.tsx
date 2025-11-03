// apps/frontend/pages/verify-email.tsx
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function VerifyEmailPage() {
  const router = useRouter();
  const { token } = router.query;
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) return;

    const verify = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/verify-email?token=${token}`
        );
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || "Verification failed");
        setStatus("success");
        setMessage("Your email has been verified. You can now log in.");
        setTimeout(() => router.push("/login"), 2000);
      } catch (err: any) {
        setStatus("error");
        setMessage(err.message);
      }
    };

    verify();
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-6 rounded-2xl shadow-md bg-white w-96 text-center">
        {status === "loading" && <p>Verifying your email...</p>}
        {status === "success" && <p className="text-green-600">{message}</p>}
        {status === "error" && (
          <div>
            <p className="text-red-600 mb-2">{message}</p>
            <a href="/resend-verification" className="text-blue-500 underline">
              Resend verification link
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
