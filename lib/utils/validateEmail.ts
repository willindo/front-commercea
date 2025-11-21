import { api } from "../api/axios";
// export function validateEmailWithAbstract(email: string) {
//   return /\S+@\S+\.\S+/.test(email);
// }

/**
 * Validate email using Abstract API's Email Reputation endpoint.
 * Performs SMTP + MX + disposable check for realistic accuracy.
 */
export async function validateEmailWithAbstract(
  email: string
): Promise<boolean> {
  try {
    const res = await api.get("https://emailreputation.abstractapi.com/v1/", {
      params: {
        api_key: process.env.NEXT_PUBLIC_ABSTRACTAPI_KEY,
        email,
      },
    });

    const data = res.data;

    // ✅ New Abstract Email Reputation format fields (from your curl)
    const isDeliverable =
      data.email_deliverability?.status === "deliverable" &&
      data.email_quality?.is_disposable === false &&
      data.email_quality?.is_username_suspicious === false &&
      data.email_domain?.is_live_site === true;

    return Boolean(isDeliverable);
  } catch (err) {
    console.error("Email validation failed:", err);
    // ✅ Fallback: don't block registration if API fails
    return true;
  }
}
