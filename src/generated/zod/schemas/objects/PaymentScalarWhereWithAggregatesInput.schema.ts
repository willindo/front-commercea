import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumPaymentStatusWithAggregatesFilterObjectSchema as EnumPaymentStatusWithAggregatesFilterObjectSchema } from './EnumPaymentStatusWithAggregatesFilter.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema'

const paymentscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PaymentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PaymentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PaymentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PaymentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PaymentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  orderId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  signature: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  amount: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional(),
  currency: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  razorpayOrderId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  razorpayPaymentId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumPaymentStatusWithAggregatesFilterObjectSchema), PaymentStatusSchema]).optional()
}).strict();
export const PaymentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PaymentScalarWhereWithAggregatesInput> = paymentscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PaymentScalarWhereWithAggregatesInput>;
export const PaymentScalarWhereWithAggregatesInputObjectZodSchema = paymentscalarwherewithaggregatesinputSchema;
