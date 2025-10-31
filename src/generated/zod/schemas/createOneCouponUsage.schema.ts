import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CouponUsageSelectObjectSchema as CouponUsageSelectObjectSchema } from './objects/CouponUsageSelect.schema';
import { CouponUsageIncludeObjectSchema as CouponUsageIncludeObjectSchema } from './objects/CouponUsageInclude.schema';
import { CouponUsageCreateInputObjectSchema as CouponUsageCreateInputObjectSchema } from './objects/CouponUsageCreateInput.schema';
import { CouponUsageUncheckedCreateInputObjectSchema as CouponUsageUncheckedCreateInputObjectSchema } from './objects/CouponUsageUncheckedCreateInput.schema';

export const CouponUsageCreateOneSchema: z.ZodType<Prisma.CouponUsageCreateArgs> = z.object({ select: CouponUsageSelectObjectSchema.optional(), include: CouponUsageIncludeObjectSchema.optional(), data: z.union([CouponUsageCreateInputObjectSchema, CouponUsageUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CouponUsageCreateArgs>;

export const CouponUsageCreateOneZodSchema = z.object({ select: CouponUsageSelectObjectSchema.optional(), include: CouponUsageIncludeObjectSchema.optional(), data: z.union([CouponUsageCreateInputObjectSchema, CouponUsageUncheckedCreateInputObjectSchema]) }).strict();