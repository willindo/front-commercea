import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  orderId: z.literal(true).optional(),
  razorpayOrderId: z.literal(true).optional(),
  razorpayPaymentId: z.literal(true).optional(),
  signature: z.literal(true).optional(),
  amount: z.literal(true).optional(),
  currency: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const PaymentMinAggregateInputObjectSchema: z.ZodType<Prisma.PaymentMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PaymentMinAggregateInputType>;
export const PaymentMinAggregateInputObjectZodSchema = makeSchema();
