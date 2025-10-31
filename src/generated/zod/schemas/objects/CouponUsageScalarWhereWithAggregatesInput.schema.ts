import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const couponusagescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CouponUsageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CouponUsageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CouponUsageScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CouponUsageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CouponUsageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  couponId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  orderId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  usedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CouponUsageScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CouponUsageScalarWhereWithAggregatesInput> = couponusagescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CouponUsageScalarWhereWithAggregatesInput>;
export const CouponUsageScalarWhereWithAggregatesInputObjectZodSchema = couponusagescalarwherewithaggregatesinputSchema;
