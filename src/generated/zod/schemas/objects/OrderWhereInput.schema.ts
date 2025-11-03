import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { EnumOrderStatusFilterObjectSchema as EnumOrderStatusFilterObjectSchema } from './EnumOrderStatusFilter.schema';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { EnumPaymentStatusFilterObjectSchema as EnumPaymentStatusFilterObjectSchema } from './EnumPaymentStatusFilter.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { AddressNullableScalarRelationFilterObjectSchema as AddressNullableScalarRelationFilterObjectSchema } from './AddressNullableScalarRelationFilter.schema';
import { AddressWhereInputObjectSchema as AddressWhereInputObjectSchema } from './AddressWhereInput.schema';
import { OrderItemListRelationFilterObjectSchema as OrderItemListRelationFilterObjectSchema } from './OrderItemListRelationFilter.schema';
import { CouponUsageListRelationFilterObjectSchema as CouponUsageListRelationFilterObjectSchema } from './CouponUsageListRelationFilter.schema';
import { PaymentListRelationFilterObjectSchema as PaymentListRelationFilterObjectSchema } from './PaymentListRelationFilter.schema';
import { GiftCardUsageListRelationFilterObjectSchema as GiftCardUsageListRelationFilterObjectSchema } from './GiftCardUsageListRelationFilter.schema'

const orderwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OrderWhereInputObjectSchema), z.lazy(() => OrderWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrderWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrderWhereInputObjectSchema), z.lazy(() => OrderWhereInputObjectSchema).array()]).optional(),
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
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  address: z.union([z.lazy(() => AddressNullableScalarRelationFilterObjectSchema), z.lazy(() => AddressWhereInputObjectSchema)]).optional(),
  items: z.lazy(() => OrderItemListRelationFilterObjectSchema).optional(),
  couponUsages: z.lazy(() => CouponUsageListRelationFilterObjectSchema).optional(),
  Payment: z.lazy(() => PaymentListRelationFilterObjectSchema).optional(),
  GiftCardUsage: z.lazy(() => GiftCardUsageListRelationFilterObjectSchema).optional()
}).strict();
export const OrderWhereInputObjectSchema: z.ZodType<Prisma.OrderWhereInput> = orderwhereinputSchema as unknown as z.ZodType<Prisma.OrderWhereInput>;
export const OrderWhereInputObjectZodSchema = orderwhereinputSchema;
