import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  orderId: z.string(),
  razorpayOrderId: z.string().optional().nullable(),
  razorpayPaymentId: z.string().optional().nullable(),
  signature: z.string().optional().nullable(),
  amount: z.number().int(),
  currency: z.string(),
  status: PaymentStatusSchema,
  createdAt: z.coerce.date().optional()
}).strict();
export const PaymentUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PaymentUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUncheckedCreateInput>;
export const PaymentUncheckedCreateInputObjectZodSchema = makeSchema();
