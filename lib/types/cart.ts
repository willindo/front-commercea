// lib/types/cart.ts
import { size, z } from "zod";

// --- Cart Item Type ---
export const CartItemSchema = z.object({
  id: z.string(),
  productId: z.string(),
  quantity: z.number(),
  // size: z.string().nullable().optional(),
  size: z.string(),
  productName: z.string().optional(),
  productPrice: z.number().optional(),
  productDescription: z.string().nullable().optional(),
  productImage: z.string().nullable().optional(),
  product: z
    .object({
      id: z.string(),
      name: z.string(),
      price: z.number(),
      images: z.array(z.string()).optional(),
    })
    .optional(),
});

export type CartItem = z.infer<typeof CartItemSchema>;

// --- Cart Type ---
export const CartSchema = z.object({
  id: z.string(),
  userId: z.string(),
  items: z.array(CartItemSchema),
});

export type CartDto = z.infer<typeof CartSchema>;

// --- DTOs ---
export const AddToCartSchema = z.object({
  productId: z.string(),
  quantity: z.number().min(1),
  size: z.string(),
});

export const UpdateCartItemSchema = z.object({
  itemId: z.string(),
  quantity: z.number().min(1),
  size: z.string(),
});

export type AddToCartDto = z.infer<typeof AddToCartSchema>;
export type UpdateCartItemDto = z.infer<typeof UpdateCartItemSchema>;
