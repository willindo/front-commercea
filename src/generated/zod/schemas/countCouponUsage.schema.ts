import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CouponUsageOrderByWithRelationInputObjectSchema as CouponUsageOrderByWithRelationInputObjectSchema } from './objects/CouponUsageOrderByWithRelationInput.schema';
import { CouponUsageWhereInputObjectSchema as CouponUsageWhereInputObjectSchema } from './objects/CouponUsageWhereInput.schema';
import { CouponUsageWhereUniqueInputObjectSchema as CouponUsageWhereUniqueInputObjectSchema } from './objects/CouponUsageWhereUniqueInput.schema';
import { CouponUsageCountAggregateInputObjectSchema as CouponUsageCountAggregateInputObjectSchema } from './objects/CouponUsageCountAggregateInput.schema';

export const CouponUsageCountSchema: z.ZodType<Prisma.CouponUsageCountArgs> = z.object({ orderBy: z.union([CouponUsageOrderByWithRelationInputObjectSchema, CouponUsageOrderByWithRelationInputObjectSchema.array()]).optional(), where: CouponUsageWhereInputObjectSchema.optional(), cursor: CouponUsageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CouponUsageCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CouponUsageCountArgs>;

export const CouponUsageCountZodSchema = z.object({ orderBy: z.union([CouponUsageOrderByWithRelationInputObjectSchema, CouponUsageOrderByWithRelationInputObjectSchema.array()]).optional(), where: CouponUsageWhereInputObjectSchema.optional(), cursor: CouponUsageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CouponUsageCountAggregateInputObjectSchema ]).optional() }).strict();