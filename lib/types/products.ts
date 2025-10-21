import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string().nullable().optional(),
  price: z.number(),
  stock: z.number().default(0),
  images: z.array(z.string()).optional(),
  categoryId: z.string().nullable().optional(),
  gender: z.enum(["MALE", "FEMALE", "UNISEX"]).nullable().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export type Product = z.infer<typeof ProductSchema>;
export const CreateProductSchema = ProductSchema.omit({ id: true });
export const UpdateProductSchema = ProductSchema.partial();
export type CreateProductDto = z.infer<typeof CreateProductSchema>;
export type UpdateProductDto = z.infer<typeof UpdateProductSchema>;
