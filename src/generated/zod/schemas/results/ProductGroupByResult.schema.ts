import * as z from 'zod';
export const ProductGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  price: z.number(),
  stock: z.number().int(),
  categoryId: z.string(),
  images: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    slug: z.number(),
    description: z.number(),
    price: z.number(),
    stock: z.number(),
    categoryId: z.number(),
    gender: z.number(),
    images: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    category: z.number(),
    sizes: z.number(),
    cartItems: z.number(),
    orderItems: z.number(),
    wishlistItems: z.number(),
    reviews: z.number()
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
    slug: z.string().nullable(),
    description: z.string().nullable(),
    price: z.number().nullable(),
    stock: z.number().int().nullable(),
    categoryId: z.string().nullable(),
    images: z.array(z.string()).nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    slug: z.string().nullable(),
    description: z.string().nullable(),
    price: z.number().nullable(),
    stock: z.number().int().nullable(),
    categoryId: z.string().nullable(),
    images: z.array(z.string()).nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));