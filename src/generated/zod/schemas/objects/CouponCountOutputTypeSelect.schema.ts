import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  usages: z.boolean().optional()
}).strict();
export const CouponCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CouponCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CouponCountOutputTypeSelect>;
export const CouponCountOutputTypeSelectObjectZodSchema = makeSchema();
