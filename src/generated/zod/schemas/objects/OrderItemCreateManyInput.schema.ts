import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SizeSchema } from '../enums/Size.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  orderId: z.string(),
  productId: z.string(),
  quantity: z.number().int(),
  priceAtPurchase: z.number(),
  size: SizeSchema.optional().nullable()
}).strict();
export const OrderItemCreateManyInputObjectSchema: z.ZodType<Prisma.OrderItemCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCreateManyInput>;
export const OrderItemCreateManyInputObjectZodSchema = makeSchema();
