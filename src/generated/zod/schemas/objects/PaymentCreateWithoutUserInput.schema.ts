import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { OrderCreateNestedOneWithoutPaymentsInputObjectSchema as OrderCreateNestedOneWithoutPaymentsInputObjectSchema } from './OrderCreateNestedOneWithoutPaymentsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  signature: z.string().optional().nullable(),
  amount: z.number(),
  currency: z.string(),
  createdAt: z.coerce.date().optional(),
  razorpayOrderId: z.string().optional().nullable(),
  razorpayPaymentId: z.string().optional().nullable(),
  status: PaymentStatusSchema.optional(),
  order: z.lazy(() => OrderCreateNestedOneWithoutPaymentsInputObjectSchema).optional()
}).strict();
export const PaymentCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.PaymentCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateWithoutUserInput>;
export const PaymentCreateWithoutUserInputObjectZodSchema = makeSchema();
