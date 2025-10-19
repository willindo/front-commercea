// lib/api/products.ts
import { api } from "./axios";
import { Product, PaginatedProducts } from "@/lib/types/products";

export async function fetchProducts(
  page = 1,
  limit = 10
): Promise<PaginatedProducts> {
  const { data } = await api.get("/products", { params: { page, limit } });
  return data;
}

export async function fetchProductById(id: string): Promise<Product> {
  const { data } = await api.get(`/products/${id}`);
  return data;
}

export async function createProduct(
  product: Omit<Product, "id">
): Promise<Product> {
  console.log("🚀 Sending create product payload:", product);
  const { data } = await api.post("/products", product);
  console.log("📦 API response:", data);
  // controller returns { message, data }
  return data.data;
}

export async function updateProduct(
  id: string,
  product: Partial<Product>
): Promise<Product> {
  const { data } = await api.put(`/products/${id}`, product);
  return data.data;
}

export async function deleteProduct(id: string): Promise<void> {
  await api.delete(`/products/${id}`);
}
