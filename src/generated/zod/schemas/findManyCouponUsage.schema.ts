import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CouponUsageIncludeObjectSchema as CouponUsageIncludeObjectSchema } from './objects/CouponUsageInclude.schema';
import { CouponUsageOrderByWithRelationInputObjectSchema as CouponUsageOrderByWithRelationInputObjectSchema } from './objects/CouponUsageOrderByWithRelationInput.schema';
import { CouponUsageWhereInputObjectSchema as CouponUsageWhereInputObjectSchema } from './objects/CouponUsageWhereInput.schema';
import { CouponUsageWhereUniqueInputObjectSchema as CouponUsageWhereUniqueInputObjectSchema } from './objects/CouponUsageWhereUniqueInput.schema';
import { CouponUsageScalarFieldEnumSchema } from './enums/CouponUsageScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CouponUsageFindManySelectSchema: z.ZodType<Prisma.CouponUsageSelect> = z.object({
    id: z.boolean().optional(),
    coupon: z.boolean().optional(),
    couponId: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional(),
    order: z.boolean().optional(),
    orderId: z.boolean().optional(),
    usedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CouponUsageSelect>;

export const CouponUsageFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    coupon: z.boolean().optional(),
    couponId: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional(),
    order: z.boolean().optional(),
    orderId: z.boolean().optional(),
    usedAt: z.boolean().optional()
  }).strict();

export const CouponUsageFindManySchema: z.ZodType<Prisma.CouponUsageFindManyArgs> = z.object({ select: CouponUsageFindManySelectSchema.optional(), include: CouponUsageIncludeObjectSchema.optional(), orderBy: z.union([CouponUsageOrderByWithRelationInputObjectSchema, CouponUsageOrderByWithRelationInputObjectSchema.array()]).optional(), where: CouponUsageWhereInputObjectSchema.optional(), cursor: CouponUsageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CouponUsageScalarFieldEnumSchema, CouponUsageScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CouponUsageFindManyArgs>;

export const CouponUsageFindManyZodSchema = z.object({ select: CouponUsageFindManySelectSchema.optional(), include: CouponUsageIncludeObjectSchema.optional(), orderBy: z.union([CouponUsageOrderByWithRelationInputObjectSchema, CouponUsageOrderByWithRelationInputObjectSchema.array()]).optional(), where: CouponUsageWhereInputObjectSchema.optional(), cursor: CouponUsageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CouponUsageScalarFieldEnumSchema, CouponUsageScalarFieldEnumSchema.array()]).optional() }).strict();