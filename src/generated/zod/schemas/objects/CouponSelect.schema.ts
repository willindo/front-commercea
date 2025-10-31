import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageFindManySchema as CouponUsageFindManySchema } from '../findManyCouponUsage.schema';
import { CouponCountOutputTypeArgsObjectSchema as CouponCountOutputTypeArgsObjectSchema } from './CouponCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  description: z.boolean().optional(),
  discountType: z.boolean().optional(),
  discountValue: z.boolean().optional(),
  minPurchase: z.boolean().optional(),
  maxDiscount: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  active: z.boolean().optional(),
  usages: z.union([z.boolean(), z.lazy(() => CouponUsageFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => CouponCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CouponSelectObjectSchema: z.ZodType<Prisma.CouponSelect> = makeSchema() as unknown as z.ZodType<Prisma.CouponSelect>;
export const CouponSelectObjectZodSchema = makeSchema();
