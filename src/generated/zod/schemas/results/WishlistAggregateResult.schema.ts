import * as z from 'zod';
export const WishlistAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    userId: z.number(),
    createdAt: z.number(),
    user: z.number(),
    items: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});