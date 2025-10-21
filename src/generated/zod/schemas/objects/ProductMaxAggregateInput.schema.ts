import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  price: z.literal(true).optional(),
  stock: z.literal(true).optional(),
  categoryId: z.literal(true).optional(),
  gender: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ProductMaxAggregateInputObjectSchema: z.ZodType<Prisma.ProductMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductMaxAggregateInputType>;
export const ProductMaxAggregateInputObjectZodSchema = makeSchema();
