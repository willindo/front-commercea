import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  orderId: SortOrderSchema.optional(),
  signature: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  currency: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  razorpayOrderId: SortOrderSchema.optional(),
  razorpayPaymentId: SortOrderSchema.optional(),
  status: SortOrderSchema.optional()
}).strict();
export const PaymentCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PaymentCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCountOrderByAggregateInput>;
export const PaymentCountOrderByAggregateInputObjectZodSchema = makeSchema();
