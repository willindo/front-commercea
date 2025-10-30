import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  orderId: z.string().optional().nullable(),
  signature: z.string().optional().nullable(),
  amount: z.number(),
  currency: z.string(),
  createdAt: z.coerce.date().optional(),
  razorpayOrderId: z.string().optional().nullable(),
  razorpayPaymentId: z.string().optional().nullable(),
  status: PaymentStatusSchema.optional()
}).strict();
export const PaymentCreateManyUserInputObjectSchema: z.ZodType<Prisma.PaymentCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateManyUserInput>;
export const PaymentCreateManyUserInputObjectZodSchema = makeSchema();
