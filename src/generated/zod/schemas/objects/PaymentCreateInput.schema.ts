import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { UserCreateNestedOneWithoutPaymentsInputObjectSchema as UserCreateNestedOneWithoutPaymentsInputObjectSchema } from './UserCreateNestedOneWithoutPaymentsInput.schema';
import { OrderCreateNestedOneWithoutPaymentInputObjectSchema as OrderCreateNestedOneWithoutPaymentInputObjectSchema } from './OrderCreateNestedOneWithoutPaymentInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  signature: z.string().optional().nullable(),
  amount: z.number(),
  currency: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  razorpayOrderId: z.string().optional().nullable(),
  razorpayPaymentId: z.string().optional().nullable(),
  status: PaymentStatusSchema.optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPaymentsInputObjectSchema),
  order: z.lazy(() => OrderCreateNestedOneWithoutPaymentInputObjectSchema).optional()
}).strict();
export const PaymentCreateInputObjectSchema: z.ZodType<Prisma.PaymentCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateInput>;
export const PaymentCreateInputObjectZodSchema = makeSchema();
