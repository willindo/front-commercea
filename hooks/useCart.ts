"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AddToCartDto, UpdateCartItemDto, CartDto } from "@/lib/types/cart";
import { api } from "@/lib/api/axios";

export function useCart() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<CartDto>({
    queryKey: ["cart"],
    queryFn: async () => (await api.get("/cart")).data,
  });

  const addToCart = useMutation({
    mutationFn: (dto: AddToCartDto) => api.post("/cart/add", dto),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });

  const updateItem = useMutation({
    mutationFn: (dto: UpdateCartItemDto) => api.put("/cart/update", dto),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });

  const removeItem = useMutation({
    mutationFn: (id: string) => api.delete(`/cart/item/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });

  const clearCart = useMutation({
    mutationFn: () => api.delete("/cart/clear"),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });

  return {
    cart: data,
    isLoading,
    isError,
    addToCart,
    updateItem,
    removeItem,
    clearCart,
  };
}
