import * as z from 'zod';
export const ReviewAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    userId: z.number(),
    productId: z.number(),
    rating: z.number(),
    comment: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    user: z.number(),
    product: z.number()
  }).optional(),
  _sum: z.object({
    rating: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    rating: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    productId: z.string().nullable(),
    rating: z.number().int().nullable(),
    comment: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    productId: z.string().nullable(),
    rating: z.number().int().nullable(),
    comment: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});