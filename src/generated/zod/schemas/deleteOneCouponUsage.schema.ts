import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CouponUsageSelectObjectSchema as CouponUsageSelectObjectSchema } from './objects/CouponUsageSelect.schema';
import { CouponUsageIncludeObjectSchema as CouponUsageIncludeObjectSchema } from './objects/CouponUsageInclude.schema';
import { CouponUsageWhereUniqueInputObjectSchema as CouponUsageWhereUniqueInputObjectSchema } from './objects/CouponUsageWhereUniqueInput.schema';

export const CouponUsageDeleteOneSchema: z.ZodType<Prisma.CouponUsageDeleteArgs> = z.object({ select: CouponUsageSelectObjectSchema.optional(), include: CouponUsageIncludeObjectSchema.optional(), where: CouponUsageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CouponUsageDeleteArgs>;

export const CouponUsageDeleteOneZodSchema = z.object({ select: CouponUsageSelectObjectSchema.optional(), include: CouponUsageIncludeObjectSchema.optional(), where: CouponUsageWhereUniqueInputObjectSchema }).strict();