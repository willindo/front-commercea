import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumDiscountTypeFilterObjectSchema as EnumDiscountTypeFilterObjectSchema } from './EnumDiscountTypeFilter.schema';
import { DiscountTypeSchema } from '../enums/DiscountType.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CouponUsageListRelationFilterObjectSchema as CouponUsageListRelationFilterObjectSchema } from './CouponUsageListRelationFilter.schema'

const couponwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CouponWhereInputObjectSchema), z.lazy(() => CouponWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CouponWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CouponWhereInputObjectSchema), z.lazy(() => CouponWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  discountType: z.union([z.lazy(() => EnumDiscountTypeFilterObjectSchema), DiscountTypeSchema]).optional(),
  discountValue: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  minPurchase: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  maxDiscount: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  startDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  endDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  active: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  usages: z.lazy(() => CouponUsageListRelationFilterObjectSchema).optional()
}).strict();
export const CouponWhereInputObjectSchema: z.ZodType<Prisma.CouponWhereInput> = couponwhereinputSchema as unknown as z.ZodType<Prisma.CouponWhereInput>;
export const CouponWhereInputObjectZodSchema = couponwhereinputSchema;
