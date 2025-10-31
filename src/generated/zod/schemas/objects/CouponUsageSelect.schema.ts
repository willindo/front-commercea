import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponArgsObjectSchema as CouponArgsObjectSchema } from './CouponArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { OrderArgsObjectSchema as OrderArgsObjectSchema } from './OrderArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  coupon: z.union([z.boolean(), z.lazy(() => CouponArgsObjectSchema)]).optional(),
  couponId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  userId: z.boolean().optional(),
  order: z.union([z.boolean(), z.lazy(() => OrderArgsObjectSchema)]).optional(),
  orderId: z.boolean().optional(),
  usedAt: z.boolean().optional()
}).strict();
export const CouponUsageSelectObjectSchema: z.ZodType<Prisma.CouponUsageSelect> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageSelect>;
export const CouponUsageSelectObjectZodSchema = makeSchema();
