import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumPaymentStatusFilterObjectSchema as EnumPaymentStatusFilterObjectSchema } from './EnumPaymentStatusFilter.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { OrderNullableScalarRelationFilterObjectSchema as OrderNullableScalarRelationFilterObjectSchema } from './OrderNullableScalarRelationFilter.schema';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema'

const paymentwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PaymentWhereInputObjectSchema), z.lazy(() => PaymentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PaymentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PaymentWhereInputObjectSchema), z.lazy(() => PaymentWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  orderId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  signature: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  amount: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  currency: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  razorpayOrderId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  razorpayPaymentId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumPaymentStatusFilterObjectSchema), PaymentStatusSchema]).optional(),
  user: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  order: z.union([z.lazy(() => OrderNullableScalarRelationFilterObjectSchema), z.lazy(() => OrderWhereInputObjectSchema)]).optional()
}).strict();
export const PaymentWhereInputObjectSchema: z.ZodType<Prisma.PaymentWhereInput> = paymentwhereinputSchema as unknown as z.ZodType<Prisma.PaymentWhereInput>;
export const PaymentWhereInputObjectZodSchema = paymentwhereinputSchema;
