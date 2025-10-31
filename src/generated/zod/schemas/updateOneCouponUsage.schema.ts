import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CouponUsageSelectObjectSchema as CouponUsageSelectObjectSchema } from './objects/CouponUsageSelect.schema';
import { CouponUsageIncludeObjectSchema as CouponUsageIncludeObjectSchema } from './objects/CouponUsageInclude.schema';
import { CouponUsageUpdateInputObjectSchema as CouponUsageUpdateInputObjectSchema } from './objects/CouponUsageUpdateInput.schema';
import { CouponUsageUncheckedUpdateInputObjectSchema as CouponUsageUncheckedUpdateInputObjectSchema } from './objects/CouponUsageUncheckedUpdateInput.schema';
import { CouponUsageWhereUniqueInputObjectSchema as CouponUsageWhereUniqueInputObjectSchema } from './objects/CouponUsageWhereUniqueInput.schema';

export const CouponUsageUpdateOneSchema: z.ZodType<Prisma.CouponUsageUpdateArgs> = z.object({ select: CouponUsageSelectObjectSchema.optional(), include: CouponUsageIncludeObjectSchema.optional(), data: z.union([CouponUsageUpdateInputObjectSchema, CouponUsageUncheckedUpdateInputObjectSchema]), where: CouponUsageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CouponUsageUpdateArgs>;

export const CouponUsageUpdateOneZodSchema = z.object({ select: CouponUsageSelectObjectSchema.optional(), include: CouponUsageIncludeObjectSchema.optional(), data: z.union([CouponUsageUpdateInputObjectSchema, CouponUsageUncheckedUpdateInputObjectSchema]), where: CouponUsageWhereUniqueInputObjectSchema }).strict();