import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CouponUsageSelectObjectSchema as CouponUsageSelectObjectSchema } from './objects/CouponUsageSelect.schema';
import { CouponUsageUpdateManyMutationInputObjectSchema as CouponUsageUpdateManyMutationInputObjectSchema } from './objects/CouponUsageUpdateManyMutationInput.schema';
import { CouponUsageWhereInputObjectSchema as CouponUsageWhereInputObjectSchema } from './objects/CouponUsageWhereInput.schema';

export const CouponUsageUpdateManyAndReturnSchema: z.ZodType<Prisma.CouponUsageUpdateManyAndReturnArgs> = z.object({ select: CouponUsageSelectObjectSchema.optional(), data: CouponUsageUpdateManyMutationInputObjectSchema, where: CouponUsageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CouponUsageUpdateManyAndReturnArgs>;

export const CouponUsageUpdateManyAndReturnZodSchema = z.object({ select: CouponUsageSelectObjectSchema.optional(), data: CouponUsageUpdateManyMutationInputObjectSchema, where: CouponUsageWhereInputObjectSchema.optional() }).strict();