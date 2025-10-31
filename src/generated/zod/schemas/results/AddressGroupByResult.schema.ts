import * as z from 'zod';
export const AddressGroupByResultSchema = z.array(z.object({
  id: z.string(),
  userId: z.string(),
  line1: z.string(),
  line2: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  _count: z.object({
    id: z.number(),
    user: z.number(),
    userId: z.number(),
    line1: z.number(),
    line2: z.number(),
    city: z.number(),
    state: z.number(),
    postalCode: z.number(),
    country: z.number(),
    orders: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    line1: z.string().nullable(),
    line2: z.string().nullable(),
    city: z.string().nullable(),
    state: z.string().nullable(),
    postalCode: z.string().nullable(),
    country: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    line1: z.string().nullable(),
    line2: z.string().nullable(),
    city: z.string().nullable(),
    state: z.string().nullable(),
    postalCode: z.string().nullable(),
    country: z.string().nullable()
  }).nullable().optional()
}));