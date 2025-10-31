import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardUsageOrderByWithRelationInputObjectSchema as GiftCardUsageOrderByWithRelationInputObjectSchema } from './objects/GiftCardUsageOrderByWithRelationInput.schema';
import { GiftCardUsageWhereInputObjectSchema as GiftCardUsageWhereInputObjectSchema } from './objects/GiftCardUsageWhereInput.schema';
import { GiftCardUsageWhereUniqueInputObjectSchema as GiftCardUsageWhereUniqueInputObjectSchema } from './objects/GiftCardUsageWhereUniqueInput.schema';
import { GiftCardUsageCountAggregateInputObjectSchema as GiftCardUsageCountAggregateInputObjectSchema } from './objects/GiftCardUsageCountAggregateInput.schema';

export const GiftCardUsageCountSchema: z.ZodType<Prisma.GiftCardUsageCountArgs> = z.object({ orderBy: z.union([GiftCardUsageOrderByWithRelationInputObjectSchema, GiftCardUsageOrderByWithRelationInputObjectSchema.array()]).optional(), where: GiftCardUsageWhereInputObjectSchema.optional(), cursor: GiftCardUsageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GiftCardUsageCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.GiftCardUsageCountArgs>;

export const GiftCardUsageCountZodSchema = z.object({ orderBy: z.union([GiftCardUsageOrderByWithRelationInputObjectSchema, GiftCardUsageOrderByWithRelationInputObjectSchema.array()]).optional(), where: GiftCardUsageWhereInputObjectSchema.optional(), cursor: GiftCardUsageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GiftCardUsageCountAggregateInputObjectSchema ]).optional() }).strict();