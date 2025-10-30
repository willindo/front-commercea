import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { productsApi, PaginatedProducts } from "@/lib/api/products";
import {
  CreateProductDto,
  UpdateProductDto,
  Product,
} from "@/lib/types/products";

export function useProducts(page = 1, limit = 10) {
  return useQuery<PaginatedProducts>({
    queryKey: ["products", page, limit],
    queryFn: () => productsApi.getAll(page, limit),
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
