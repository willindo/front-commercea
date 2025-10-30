import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SizeSchema } from '../enums/Size.schema';
import { OrderCreateNestedOneWithoutItemsInputObjectSchema as OrderCreateNestedOneWithoutItemsInputObjectSchema } from './OrderCreateNestedOneWithoutItemsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int(),
  priceAtPurchase: z.number(),
  size: SizeSchema.optional().nullable(),
  order: z.lazy(() => OrderCreateNestedOneWithoutItemsInputObjectSchema)
}).strict();
export const OrderItemCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.OrderItemCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCreateWithoutProductInput>;
export const OrderItemCreateWithoutProductInputObjectZodSchema = makeSchema();
