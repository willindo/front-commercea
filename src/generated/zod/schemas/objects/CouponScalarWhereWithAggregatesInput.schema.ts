import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumDiscountTypeWithAggregatesFilterObjectSchema as EnumDiscountTypeWithAggregatesFilterObjectSchema } from './EnumDiscountTypeWithAggregatesFilter.schema';
import { DiscountTypeSchema } from '../enums/DiscountType.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const couponscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CouponScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CouponScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CouponScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CouponScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CouponScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  discountType: z.union([z.lazy(() => EnumDiscountTypeWithAggregatesFilterObjectSchema), DiscountTypeSchema]).optional(),
  discountValue: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  minPurchase: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  maxDiscount: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  startDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  endDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  active: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CouponScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CouponScalarWhereWithAggregatesInput> = couponscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CouponScalarWhereWithAggregatesInput>;
export const CouponScalarWhereWithAggregatesInputObjectZodSchema = couponscalarwherewithaggregatesinputSchema;
