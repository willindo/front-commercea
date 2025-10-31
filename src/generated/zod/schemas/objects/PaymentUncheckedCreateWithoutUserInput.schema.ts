import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  orderId: z.string().optional().nullable(),
  signature: z.string().optional().nullable(),
  amount: z.number(),
  currency: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  razorpayOrderId: z.string().optional().nullable(),
  razorpayPaymentId: z.string().optional().nullable(),
  status: PaymentStatusSchema.optional()
}).strict();
export const PaymentUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.PaymentUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUncheckedCreateWithoutUserInput>;
export const PaymentUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
