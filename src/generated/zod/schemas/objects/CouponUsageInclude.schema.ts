import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponArgsObjectSchema as CouponArgsObjectSchema } from './CouponArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { OrderArgsObjectSchema as OrderArgsObjectSchema } from './OrderArgs.schema'

const makeSchema = () => z.object({
  coupon: z.union([z.boolean(), z.lazy(() => CouponArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  order: z.union([z.boolean(), z.lazy(() => OrderArgsObjectSchema)]).optional()
}).strict();
export const CouponUsageIncludeObjectSchema: z.ZodType<Prisma.CouponUsageInclude> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageInclude>;
export const CouponUsageIncludeObjectZodSchema = makeSchema();
