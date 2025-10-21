import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  orderId: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  priceAtPurchase: z.literal(true).optional()
}).strict();
export const OrderItemMinAggregateInputObjectSchema: z.ZodType<Prisma.OrderItemMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemMinAggregateInputType>;
export const OrderItemMinAggregateInputObjectZodSchema = makeSchema();
