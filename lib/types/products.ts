import { z } from "zod";
import {
  ProductModelSchema,
  ProductCreateInputObjectSchema,
  ProductUpdateInputObjectSchema,
} from "../../../front-commerce/src/generated/zod/schemas";

export type Product = {
  id: string;
  name: string;
  price: number;
  stock?: number;
  description?: string;
  images?: string[];
};

// ✅ Keep schema and DTO names distinct
export const CreateProductSchema = ProductCreateInputObjectSchema;
export type CreateProductDto = z.infer<typeof CreateProductSchema>;

export const UpdateProductSchema = ProductUpdateInputObjectSchema;
export type UpdateProductDto = z.infer<typeof UpdateProductSchema>;

export const ProductResponseSchema = ProductModelSchema;
export type ProductResponseDto = z.infer<typeof ProductResponseSchema>;

export interface PaginatedProducts {
  data: ProductResponseDto[];
  total: number;
}
