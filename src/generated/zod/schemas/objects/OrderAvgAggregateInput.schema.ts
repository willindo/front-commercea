import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  totalAmount: z.literal(true).optional(),
  shippingCost: z.literal(true).optional(),
  taxAmount: z.literal(true).optional(),
  discountAmount: z.literal(true).optional()
}).strict();
export const OrderAvgAggregateInputObjectSchema: z.ZodType<Prisma.OrderAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrderAvgAggregateInputType>;
export const OrderAvgAggregateInputObjectZodSchema = makeSchema();
