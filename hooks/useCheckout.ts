// /home/badsha/dev/front-commerce/hooks/useCheckout.ts
"use client";

import { api } from "@/lib/api/axios";
import { useMutation } from "@tanstack/react-query";

api;
export function useCheckout() {
  return useMutation({
    mutationFn: async () => {
      const res = await api.post("/checkout");
      return res.data;
    },
  });
}
