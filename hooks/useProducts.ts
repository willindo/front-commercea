"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchProducts,
  fetchProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "@/lib/api/products";
// import type { PaginatedProducts } from "@/lib/api/products";
import type {
  CreateProductDto,
  UpdateProductDto,
  PaginatedProducts,
} from "@/lib/types/products";

/** products list (paginated) */
export function useProducts(page = 1, limit = 10) {
  return useQuery<PaginatedProducts>({
    queryKey: ["products", page, limit],
    queryFn: () => fetchProducts(page, limit),
    staleTime: 1000 * 60 * 5,
  });
}

/** single product */
export function useProduct(id?: string) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => {
      if (!id) throw new Error("Missing id");
      return fetchProductById(id);
    },
    enabled: !!id,
  });
}

/** create */
export function useCreateProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateProductDto) => createProduct(payload),
    onSuccess: () => {
      console.log("✅ Product created successfully");
      qc.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (err: any) =>
      console.error(
        "Create product error:",
        err?.response?.data ?? err?.message ?? err
      ),
  });
}

/** update */
export function useUpdateProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateProductDto }) =>
      updateProduct(id, data),
    onSuccess: (_, { id }) => {
      qc.invalidateQueries({ queryKey: ["products"] });
      qc.invalidateQueries({ queryKey: ["product", id] });
    },
    onError: (err: any) =>
      console.error(
        "Update product error:",
        err?.response?.data ?? err?.message ?? err
      ),
  });
}

/** delete */
export function useDeleteProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteProduct(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products"] }),
    onError: (err: any) =>
      console.error(
        "Delete product error:",
        err?.response?.data ?? err?.message ?? err
      ),
  });
}
