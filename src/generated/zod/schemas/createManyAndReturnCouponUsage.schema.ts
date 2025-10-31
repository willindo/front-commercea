import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CouponUsageSelectObjectSchema as CouponUsageSelectObjectSchema } from './objects/CouponUsageSelect.schema';
import { CouponUsageCreateManyInputObjectSchema as CouponUsageCreateManyInputObjectSchema } from './objects/CouponUsageCreateManyInput.schema';

export const CouponUsageCreateManyAndReturnSchema: z.ZodType<Prisma.CouponUsageCreateManyAndReturnArgs> = z.object({ select: CouponUsageSelectObjectSchema.optional(), data: z.union([ CouponUsageCreateManyInputObjectSchema, z.array(CouponUsageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CouponUsageCreateManyAndReturnArgs>;

export const CouponUsageCreateManyAndReturnZodSchema = z.object({ select: CouponUsageSelectObjectSchema.optional(), data: z.union([ CouponUsageCreateManyInputObjectSchema, z.array(CouponUsageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();