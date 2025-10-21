import { api } from "./axios";
import {
  CreateProductDto,
  UpdateProductDto,
  Product,
} from "@/lib/types/products";

export type PaginatedProducts = {
  data: Product[];
  total: number;
  page: number;
  limit: number;
};

export const productsApi = {
  async getAll(page = 1, limit = 10): Promise<PaginatedProducts> {
    const res = await api.get(`/products`, { params: { page, limit } });
    return res.data;
  },

  async getOne(id: string): Promise<Product> {
    const res = await api.get(`/products/${id}`);
    return res.data;
  },

  async create(data: CreateProductDto): Promise<Product> {
    const res = await api.post(`/products`, data);
    return res.data;
  },

  async update(id: string, data: UpdateProductDto): Promise<Product> {
    const res = await api.patch(`/products/${id}`, data);
    return res.data;
  },

  async remove(id: string): Promise<Product> {
    const res = await api.delete(`/products/${id}`);
    return res.data;
  },
};
