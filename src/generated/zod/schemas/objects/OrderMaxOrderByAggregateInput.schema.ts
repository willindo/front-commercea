import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  addressId: SortOrderSchema.optional(),
  latestPaymentId: SortOrderSchema.optional(),
  totalAmount: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  paymentStatus: SortOrderSchema.optional(),
  currency: SortOrderSchema.optional(),
  shippingCost: SortOrderSchema.optional(),
  taxAmount: SortOrderSchema.optional(),
  discountAmount: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const OrderMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrderMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderMaxOrderByAggregateInput>;
export const OrderMaxOrderByAggregateInputObjectZodSchema = makeSchema();
