import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageFindManySchema as CouponUsageFindManySchema } from '../findManyCouponUsage.schema';
import { CouponCountOutputTypeArgsObjectSchema as CouponCountOutputTypeArgsObjectSchema } from './CouponCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  usages: z.union([z.boolean(), z.lazy(() => CouponUsageFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CouponCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CouponIncludeObjectSchema: z.ZodType<Prisma.CouponInclude> = makeSchema() as unknown as z.ZodType<Prisma.CouponInclude>;
export const CouponIncludeObjectZodSchema = makeSchema();
