import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardOrderByWithRelationInputObjectSchema as GiftCardOrderByWithRelationInputObjectSchema } from './objects/GiftCardOrderByWithRelationInput.schema';
import { GiftCardWhereInputObjectSchema as GiftCardWhereInputObjectSchema } from './objects/GiftCardWhereInput.schema';
import { GiftCardWhereUniqueInputObjectSchema as GiftCardWhereUniqueInputObjectSchema } from './objects/GiftCardWhereUniqueInput.schema';
import { GiftCardCountAggregateInputObjectSchema as GiftCardCountAggregateInputObjectSchema } from './objects/GiftCardCountAggregateInput.schema';

export const GiftCardCountSchema: z.ZodType<Prisma.GiftCardCountArgs> = z.object({ orderBy: z.union([GiftCardOrderByWithRelationInputObjectSchema, GiftCardOrderByWithRelationInputObjectSchema.array()]).optional(), where: GiftCardWhereInputObjectSchema.optional(), cursor: GiftCardWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GiftCardCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.GiftCardCountArgs>;

export const GiftCardCountZodSchema = z.object({ orderBy: z.union([GiftCardOrderByWithRelationInputObjectSchema, GiftCardOrderByWithRelationInputObjectSchema.array()]).optional(), where: GiftCardWhereInputObjectSchema.optional(), cursor: GiftCardWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GiftCardCountAggregateInputObjectSchema ]).optional() }).strict();