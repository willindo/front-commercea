import { api } from "./axios";
import { PaginatedProducts } from "@/lib/types/products";
import {
  CreateProductDto,
  UpdateProductDto,
  Product,
} from "@/lib/types/products";

export const productsApi = {
  async getAll(
    page: number = 1,
    limit: number = 10,
    params?: Record<string, string[] | string>
  ): Promise<PaginatedProducts> {
    const query = new URLSearchParams({
      page: String(page),
      limit: String(limit),
    });

    if (params) {
      Object.entries(params).forEach(([key, val]) => {
        if (Array.isArray(val)) {
          val.forEach((v) => query.append(key, v));
        } else if (val) {
          query.set(key, String(val));
        }
      });
    }

    const { data } = await api.get(`/products?${query.toString()}`);

    return {
      items: data.items || data.data || [],
      total: data.total ?? 0,
      page: data.page ?? page,
      limit: data.limit ?? limit,
      hasNextPage:
        data.total && data.limit
          ? data.page * data.limit < data.total
          : data.hasNextPage ?? false,
    };
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
