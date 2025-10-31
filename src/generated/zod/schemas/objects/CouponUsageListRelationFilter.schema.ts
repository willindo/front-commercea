import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageWhereInputObjectSchema as CouponUsageWhereInputObjectSchema } from './CouponUsageWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CouponUsageWhereInputObjectSchema).optional(),
  some: z.lazy(() => CouponUsageWhereInputObjectSchema).optional(),
  none: z.lazy(() => CouponUsageWhereInputObjectSchema).optional()
}).strict();
export const CouponUsageListRelationFilterObjectSchema: z.ZodType<Prisma.CouponUsageListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageListRelationFilter>;
export const CouponUsageListRelationFilterObjectZodSchema = makeSchema();
