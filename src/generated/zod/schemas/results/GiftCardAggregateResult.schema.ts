import * as z from 'zod';
export const GiftCardAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    code: z.number(),
    userId: z.number(),
    balance: z.number(),
    isActive: z.number(),
    issuedBy: z.number(),
    createdAt: z.number(),
    expiresAt: z.number(),
    user: z.number(),
    usages: z.number()
  }).optional(),
  _sum: z.object({
    balance: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    balance: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    code: z.string().nullable(),
    userId: z.string().nullable(),
    balance: z.number().nullable(),
    issuedBy: z.string().nullable(),
    createdAt: z.date().nullable(),
    expiresAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    code: z.string().nullable(),
    userId: z.string().nullable(),
    balance: z.number().nullable(),
    issuedBy: z.string().nullable(),
    createdAt: z.date().nullable(),
    expiresAt: z.date().nullable()
  }).nullable().optional()});