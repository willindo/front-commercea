import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CouponIncludeObjectSchema as CouponIncludeObjectSchema } from './objects/CouponInclude.schema';
import { CouponOrderByWithRelationInputObjectSchema as CouponOrderByWithRelationInputObjectSchema } from './objects/CouponOrderByWithRelationInput.schema';
import { CouponWhereInputObjectSchema as CouponWhereInputObjectSchema } from './objects/CouponWhereInput.schema';
import { CouponWhereUniqueInputObjectSchema as CouponWhereUniqueInputObjectSchema } from './objects/CouponWhereUniqueInput.schema';
import { CouponScalarFieldEnumSchema } from './enums/CouponScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CouponFindFirstOrThrowSelectSchema: z.ZodType<Prisma.CouponSelect> = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    description: z.boolean().optional(),
    discountType: z.boolean().optional(),
    discountValue: z.boolean().optional(),
    minPurchase: z.boolean().optional(),
    maxDiscount: z.boolean().optional(),
    startDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    active: z.boolean().optional(),
    usages: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CouponSelect>;

export const CouponFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    description: z.boolean().optional(),
    discountType: z.boolean().optional(),
    discountValue: z.boolean().optional(),
    minPurchase: z.boolean().optional(),
    maxDiscount: z.boolean().optional(),
    startDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    active: z.boolean().optional(),
    usages: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CouponFindFirstOrThrowSchema: z.ZodType<Prisma.CouponFindFirstOrThrowArgs> = z.object({ select: CouponFindFirstOrThrowSelectSchema.optional(), include: CouponIncludeObjectSchema.optional(), orderBy: z.union([CouponOrderByWithRelationInputObjectSchema, CouponOrderByWithRelationInputObjectSchema.array()]).optional(), where: CouponWhereInputObjectSchema.optional(), cursor: CouponWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CouponScalarFieldEnumSchema, CouponScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CouponFindFirstOrThrowArgs>;

export const CouponFindFirstOrThrowZodSchema = z.object({ select: CouponFindFirstOrThrowSelectSchema.optional(), include: CouponIncludeObjectSchema.optional(), orderBy: z.union([CouponOrderByWithRelationInputObjectSchema, CouponOrderByWithRelationInputObjectSchema.array()]).optional(), where: CouponWhereInputObjectSchema.optional(), cursor: CouponWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CouponScalarFieldEnumSchema, CouponScalarFieldEnumSchema.array()]).optional() }).strict();