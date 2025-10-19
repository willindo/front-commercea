"use client";

import { AuthProvider } from "@/context/AuthContext";
import { QueryProvider } from "@/lib/providers/query-provider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </QueryProvider>
  );
}
