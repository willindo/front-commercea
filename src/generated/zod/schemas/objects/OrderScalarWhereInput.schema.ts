import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { EnumOrderStatusFilterObjectSchema as EnumOrderStatusFilterObjectSchema } from './EnumOrderStatusFilter.schema';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { EnumPaymentStatusFilterObjectSchema as EnumPaymentStatusFilterObjectSchema } from './EnumPaymentStatusFilter.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const orderscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OrderScalarWhereInputObjectSchema), z.lazy(() => OrderScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrderScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrderScalarWhereInputObjectSchema), z.lazy(() => OrderScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  guestName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  guestEmail: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  guestPhone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  addressId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  latestPaymentId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  totalAmount: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  status: z.union([z.lazy(() => EnumOrderStatusFilterObjectSchema), OrderStatusSchema]).optional(),
  paymentStatus: z.union([z.lazy(() => EnumPaymentStatusFilterObjectSchema), PaymentStatusSchema]).optional(),
  currency: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  shippingCost: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  taxAmount: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  discountAmount: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const OrderScalarWhereInputObjectSchema: z.ZodType<Prisma.OrderScalarWhereInput> = orderscalarwhereinputSchema as unknown as z.ZodType<Prisma.OrderScalarWhereInput>;
export const OrderScalarWhereInputObjectZodSchema = orderscalarwhereinputSchema;
