import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CouponScalarRelationFilterObjectSchema as CouponScalarRelationFilterObjectSchema } from './CouponScalarRelationFilter.schema';
import { CouponWhereInputObjectSchema as CouponWhereInputObjectSchema } from './CouponWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { OrderNullableScalarRelationFilterObjectSchema as OrderNullableScalarRelationFilterObjectSchema } from './OrderNullableScalarRelationFilter.schema';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema'

const couponusagewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CouponUsageWhereInputObjectSchema), z.lazy(() => CouponUsageWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CouponUsageWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CouponUsageWhereInputObjectSchema), z.lazy(() => CouponUsageWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  couponId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  orderId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  usedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  coupon: z.union([z.lazy(() => CouponScalarRelationFilterObjectSchema), z.lazy(() => CouponWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  order: z.union([z.lazy(() => OrderNullableScalarRelationFilterObjectSchema), z.lazy(() => OrderWhereInputObjectSchema)]).optional()
}).strict();
export const CouponUsageWhereInputObjectSchema: z.ZodType<Prisma.CouponUsageWhereInput> = couponusagewhereinputSchema as unknown as z.ZodType<Prisma.CouponUsageWhereInput>;
export const CouponUsageWhereInputObjectZodSchema = couponusagewhereinputSchema;
