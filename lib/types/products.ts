// lib/types/products.ts
import { z } from "zod";

export const GenderEnum = z.enum(["MENS", "WOMENS", "BOYS", "GIRLS", "UNISEX"]);
export const SizeEnum = z.enum(["XS", "S", "M", "L", "XL", "XXL"]);

export const ProductSizeSchema = z.object({
  id: z.string().optional(),
  size: SizeEnum,
  quantity: z.number().min(0), // required
});

export const ProductSchema = z.object({
  id: z.string(), // ✅ cuid, not uuid
  name: z.string().min(1, "Name is required"),
  description: z.string().nullable().optional(),
  price: z.coerce.number().min(0, "Price must be 0 or greater"),
  stock: z.coerce.number().min(0, "Stock must be 0 or greater"),
  sizes: z.array(ProductSizeSchema).optional(),
  images: z.array(z.string()).optional(), // URLs not enforced for flexibility
  categoryId: z.string().nullable().optional(),
  gender: GenderEnum.nullable().optional(),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
});

export const CreateProductSchema = ProductSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateProductSchema = ProductSchema.partial();

export type Product = z.infer<typeof ProductSchema>;
export type CreateProductDto = z.infer<typeof CreateProductSchema>;
export type UpdateProductDto = z.infer<typeof UpdateProductSchema>;
export type Size = z.infer<typeof SizeEnum>;
export type Gender = z.infer<typeof GenderEnum>;
