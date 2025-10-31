import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const couponusagescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CouponUsageScalarWhereInputObjectSchema), z.lazy(() => CouponUsageScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CouponUsageScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CouponUsageScalarWhereInputObjectSchema), z.lazy(() => CouponUsageScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  couponId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  orderId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  usedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CouponUsageScalarWhereInputObjectSchema: z.ZodType<Prisma.CouponUsageScalarWhereInput> = couponusagescalarwhereinputSchema as unknown as z.ZodType<Prisma.CouponUsageScalarWhereInput>;
export const CouponUsageScalarWhereInputObjectZodSchema = couponusagescalarwhereinputSchema;
