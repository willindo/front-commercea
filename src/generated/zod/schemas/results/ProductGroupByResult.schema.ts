import * as z from 'zod';
export const ProductGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  stock: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  images: z.array(z.string()),
  categoryId: z.string(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    description: z.number(),
    price: z.number(),
    stock: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    images: z.number(),
    categoryId: z.number(),
    gender: z.number(),
    cartItems: z.number(),
    orderItems: z.number(),
    category: z.number(),
    sizes: z.number(),
    wishlistItems: z.number()
  }).optional(),
  _sum: z.object({
    price: z.number().nullable(),
    stock: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    price: z.number().nullable(),
    stock: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    price: z.number().nullable(),
    stock: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    images: z.array(z.string()).nullable(),
    categoryId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    price: z.number().nullable(),
    stock: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    images: z.array(z.string()).nullable(),
    categoryId: z.string().nullable()
  }).nullable().optional()
}));