import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CouponUsageWhereInputObjectSchema as CouponUsageWhereInputObjectSchema } from './objects/CouponUsageWhereInput.schema';

export const CouponUsageDeleteManySchema: z.ZodType<Prisma.CouponUsageDeleteManyArgs> = z.object({ where: CouponUsageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CouponUsageDeleteManyArgs>;

export const CouponUsageDeleteManyZodSchema = z.object({ where: CouponUsageWhereInputObjectSchema.optional() }).strict();