import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CouponUsageCreateManyInputObjectSchema as CouponUsageCreateManyInputObjectSchema } from './objects/CouponUsageCreateManyInput.schema';

export const CouponUsageCreateManySchema: z.ZodType<Prisma.CouponUsageCreateManyArgs> = z.object({ data: z.union([ CouponUsageCreateManyInputObjectSchema, z.array(CouponUsageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CouponUsageCreateManyArgs>;

export const CouponUsageCreateManyZodSchema = z.object({ data: z.union([ CouponUsageCreateManyInputObjectSchema, z.array(CouponUsageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();