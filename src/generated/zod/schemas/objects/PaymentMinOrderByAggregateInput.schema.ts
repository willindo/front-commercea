import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  orderId: SortOrderSchema.optional(),
  razorpayOrderId: SortOrderSchema.optional(),
  razorpayPaymentId: SortOrderSchema.optional(),
  signature: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  currency: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const PaymentMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PaymentMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentMinOrderByAggregateInput>;
export const PaymentMinOrderByAggregateInputObjectZodSchema = makeSchema();
