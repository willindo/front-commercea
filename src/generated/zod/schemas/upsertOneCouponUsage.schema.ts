import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CouponUsageSelectObjectSchema as CouponUsageSelectObjectSchema } from './objects/CouponUsageSelect.schema';
import { CouponUsageIncludeObjectSchema as CouponUsageIncludeObjectSchema } from './objects/CouponUsageInclude.schema';
import { CouponUsageWhereUniqueInputObjectSchema as CouponUsageWhereUniqueInputObjectSchema } from './objects/CouponUsageWhereUniqueInput.schema';
import { CouponUsageCreateInputObjectSchema as CouponUsageCreateInputObjectSchema } from './objects/CouponUsageCreateInput.schema';
import { CouponUsageUncheckedCreateInputObjectSchema as CouponUsageUncheckedCreateInputObjectSchema } from './objects/CouponUsageUncheckedCreateInput.schema';
import { CouponUsageUpdateInputObjectSchema as CouponUsageUpdateInputObjectSchema } from './objects/CouponUsageUpdateInput.schema';
import { CouponUsageUncheckedUpdateInputObjectSchema as CouponUsageUncheckedUpdateInputObjectSchema } from './objects/CouponUsageUncheckedUpdateInput.schema';

export const CouponUsageUpsertOneSchema: z.ZodType<Prisma.CouponUsageUpsertArgs> = z.object({ select: CouponUsageSelectObjectSchema.optional(), include: CouponUsageIncludeObjectSchema.optional(), where: CouponUsageWhereUniqueInputObjectSchema, create: z.union([ CouponUsageCreateInputObjectSchema, CouponUsageUncheckedCreateInputObjectSchema ]), update: z.union([ CouponUsageUpdateInputObjectSchema, CouponUsageUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CouponUsageUpsertArgs>;

export const CouponUsageUpsertOneZodSchema = z.object({ select: CouponUsageSelectObjectSchema.optional(), include: CouponUsageIncludeObjectSchema.optional(), where: CouponUsageWhereUniqueInputObjectSchema, create: z.union([ CouponUsageCreateInputObjectSchema, CouponUsageUncheckedCreateInputObjectSchema ]), update: z.union([ CouponUsageUpdateInputObjectSchema, CouponUsageUncheckedUpdateInputObjectSchema ]) }).strict();