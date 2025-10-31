import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardUsageIncludeObjectSchema as GiftCardUsageIncludeObjectSchema } from './objects/GiftCardUsageInclude.schema';
import { GiftCardUsageOrderByWithRelationInputObjectSchema as GiftCardUsageOrderByWithRelationInputObjectSchema } from './objects/GiftCardUsageOrderByWithRelationInput.schema';
import { GiftCardUsageWhereInputObjectSchema as GiftCardUsageWhereInputObjectSchema } from './objects/GiftCardUsageWhereInput.schema';
import { GiftCardUsageWhereUniqueInputObjectSchema as GiftCardUsageWhereUniqueInputObjectSchema } from './objects/GiftCardUsageWhereUniqueInput.schema';
import { GiftCardUsageScalarFieldEnumSchema } from './enums/GiftCardUsageScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GiftCardUsageFindFirstOrThrowSelectSchema: z.ZodType<Prisma.GiftCardUsageSelect> = z.object({
    id: z.boolean().optional(),
    giftCardId: z.boolean().optional(),
    orderId: z.boolean().optional(),
    amountUsed: z.boolean().optional(),
    usedAt: z.boolean().optional(),
    giftCard: z.boolean().optional(),
    order: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.GiftCardUsageSelect>;

export const GiftCardUsageFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    giftCardId: z.boolean().optional(),
    orderId: z.boolean().optional(),
    amountUsed: z.boolean().optional(),
    usedAt: z.boolean().optional(),
    giftCard: z.boolean().optional(),
    order: z.boolean().optional()
  }).strict();

export const GiftCardUsageFindFirstOrThrowSchema: z.ZodType<Prisma.GiftCardUsageFindFirstOrThrowArgs> = z.object({ select: GiftCardUsageFindFirstOrThrowSelectSchema.optional(), include: GiftCardUsageIncludeObjectSchema.optional(), orderBy: z.union([GiftCardUsageOrderByWithRelationInputObjectSchema, GiftCardUsageOrderByWithRelationInputObjectSchema.array()]).optional(), where: GiftCardUsageWhereInputObjectSchema.optional(), cursor: GiftCardUsageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GiftCardUsageScalarFieldEnumSchema, GiftCardUsageScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.GiftCardUsageFindFirstOrThrowArgs>;

export const GiftCardUsageFindFirstOrThrowZodSchema = z.object({ select: GiftCardUsageFindFirstOrThrowSelectSchema.optional(), include: GiftCardUsageIncludeObjectSchema.optional(), orderBy: z.union([GiftCardUsageOrderByWithRelationInputObjectSchema, GiftCardUsageOrderByWithRelationInputObjectSchema.array()]).optional(), where: GiftCardUsageWhereInputObjectSchema.optional(), cursor: GiftCardUsageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GiftCardUsageScalarFieldEnumSchema, GiftCardUsageScalarFieldEnumSchema.array()]).optional() }).strict();