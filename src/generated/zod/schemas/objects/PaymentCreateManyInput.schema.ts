import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string().optional().nullable(),
  orderId: z.string().optional().nullable(),
  signature: z.string().optional().nullable(),
  amount: z.number(),
  currency: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  razorpayOrderId: z.string().optional().nullable(),
  razorpayPaymentId: z.string().optional().nullable(),
  status: PaymentStatusSchema.optional()
}).strict();
export const PaymentCreateManyInputObjectSchema: z.ZodType<Prisma.PaymentCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateManyInput>;
export const PaymentCreateManyInputObjectZodSchema = makeSchema();
