import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { productsApi } from "@/lib/api/products";
import {
  CreateProductDto,
  UpdateProductDto,
  PaginatedProducts,
  Product,
} from "@/lib/types/products";

/**
 * Enhanced useProducts hook
 * - Supports pagination
 * - Supports optional filters
 * - Backward compatible with existing calls (no breaking changes)
 */

export function useProducts(
  page = 1,
  limit = 10,
  params?: Record<string, string[] | string>
) {
  return useQuery<PaginatedProducts>({
    queryKey: ["products", page, limit, params],
    queryFn: () => productsApi.getAll(page, limit, params),
    // keepPreviousData: true, // ✅ Smooth pagination transitions
  });
}

export function useProduct(id: string) {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => productsApi.getOne(id),
    enabled: !!id,
  });
}

export function useCreateProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (dto: CreateProductDto) => productsApi.create(dto),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products"] }),
  });
}

export function useUpdateProduct(id: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (dto: UpdateProductDto) => productsApi.update(id, dto),
    onSuccess: async () => {
      await Promise.all([
        qc.invalidateQueries({ queryKey: ["products"], exact: false }),
        qc.invalidateQueries({ queryKey: ["product", id] }),
      ]);
    },
  });
}

export function useDeleteProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => productsApi.remove(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products"] }),
  });
}
