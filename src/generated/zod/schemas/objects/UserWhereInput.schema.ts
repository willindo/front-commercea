import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumRoleFilterObjectSchema as EnumRoleFilterObjectSchema } from './EnumRoleFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { AddressListRelationFilterObjectSchema as AddressListRelationFilterObjectSchema } from './AddressListRelationFilter.schema';
import { CartNullableScalarRelationFilterObjectSchema as CartNullableScalarRelationFilterObjectSchema } from './CartNullableScalarRelationFilter.schema';
import { CartWhereInputObjectSchema as CartWhereInputObjectSchema } from './CartWhereInput.schema';
import { OrderListRelationFilterObjectSchema as OrderListRelationFilterObjectSchema } from './OrderListRelationFilter.schema';
import { PaymentListRelationFilterObjectSchema as PaymentListRelationFilterObjectSchema } from './PaymentListRelationFilter.schema';
import { WishlistListRelationFilterObjectSchema as WishlistListRelationFilterObjectSchema } from './WishlistListRelationFilter.schema';
import { ReviewListRelationFilterObjectSchema as ReviewListRelationFilterObjectSchema } from './ReviewListRelationFilter.schema';
import { GiftCardListRelationFilterObjectSchema as GiftCardListRelationFilterObjectSchema } from './GiftCardListRelationFilter.schema';
import { CouponUsageListRelationFilterObjectSchema as CouponUsageListRelationFilterObjectSchema } from './CouponUsageListRelationFilter.schema'

const userwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  role: z.union([z.lazy(() => EnumRoleFilterObjectSchema), RoleSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  addresses: z.lazy(() => AddressListRelationFilterObjectSchema).optional(),
  cart: z.union([z.lazy(() => CartNullableScalarRelationFilterObjectSchema), z.lazy(() => CartWhereInputObjectSchema)]).optional(),
  orders: z.lazy(() => OrderListRelationFilterObjectSchema).optional(),
  payments: z.lazy(() => PaymentListRelationFilterObjectSchema).optional(),
  wishlists: z.lazy(() => WishlistListRelationFilterObjectSchema).optional(),
  reviews: z.lazy(() => ReviewListRelationFilterObjectSchema).optional(),
  giftCards: z.lazy(() => GiftCardListRelationFilterObjectSchema).optional(),
  couponUsages: z.lazy(() => CouponUsageListRelationFilterObjectSchema).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = userwhereinputSchema as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;
