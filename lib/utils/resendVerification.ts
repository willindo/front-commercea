import { api } from "../api/axios";

export async function resendVerification(email: string) {
  const res = await api.post("/auth/resend-verification", { email });
  return res.data;
}
