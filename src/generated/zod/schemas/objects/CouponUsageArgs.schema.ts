import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageSelectObjectSchema as CouponUsageSelectObjectSchema } from './CouponUsageSelect.schema';
import { CouponUsageIncludeObjectSchema as CouponUsageIncludeObjectSchema } from './CouponUsageInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CouponUsageSelectObjectSchema).optional(),
  include: z.lazy(() => CouponUsageIncludeObjectSchema).optional()
}).strict();
export const CouponUsageArgsObjectSchema = makeSchema();
export const CouponUsageArgsObjectZodSchema = makeSchema();
