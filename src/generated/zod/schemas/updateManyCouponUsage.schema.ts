import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CouponUsageUpdateManyMutationInputObjectSchema as CouponUsageUpdateManyMutationInputObjectSchema } from './objects/CouponUsageUpdateManyMutationInput.schema';
import { CouponUsageWhereInputObjectSchema as CouponUsageWhereInputObjectSchema } from './objects/CouponUsageWhereInput.schema';

export const CouponUsageUpdateManySchema: z.ZodType<Prisma.CouponUsageUpdateManyArgs> = z.object({ data: CouponUsageUpdateManyMutationInputObjectSchema, where: CouponUsageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CouponUsageUpdateManyArgs>;

export const CouponUsageUpdateManyZodSchema = z.object({ data: CouponUsageUpdateManyMutationInputObjectSchema, where: CouponUsageWhereInputObjectSchema.optional() }).strict();