import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardIncludeObjectSchema as GiftCardIncludeObjectSchema } from './objects/GiftCardInclude.schema';
import { GiftCardOrderByWithRelationInputObjectSchema as GiftCardOrderByWithRelationInputObjectSchema } from './objects/GiftCardOrderByWithRelationInput.schema';
import { GiftCardWhereInputObjectSchema as GiftCardWhereInputObjectSchema } from './objects/GiftCardWhereInput.schema';
import { GiftCardWhereUniqueInputObjectSchema as GiftCardWhereUniqueInputObjectSchema } from './objects/GiftCardWhereUniqueInput.schema';
import { GiftCardScalarFieldEnumSchema } from './enums/GiftCardScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GiftCardFindManySelectSchema: z.ZodType<Prisma.GiftCardSelect> = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    userId: z.boolean().optional(),
    balance: z.boolean().optional(),
    isActive: z.boolean().optional(),
    issuedBy: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    user: z.boolean().optional(),
    usages: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.GiftCardSelect>;

export const GiftCardFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    userId: z.boolean().optional(),
    balance: z.boolean().optional(),
    isActive: z.boolean().optional(),
    issuedBy: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    user: z.boolean().optional(),
    usages: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const GiftCardFindManySchema: z.ZodType<Prisma.GiftCardFindManyArgs> = z.object({ select: GiftCardFindManySelectSchema.optional(), include: GiftCardIncludeObjectSchema.optional(), orderBy: z.union([GiftCardOrderByWithRelationInputObjectSchema, GiftCardOrderByWithRelationInputObjectSchema.array()]).optional(), where: GiftCardWhereInputObjectSchema.optional(), cursor: GiftCardWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GiftCardScalarFieldEnumSchema, GiftCardScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.GiftCardFindManyArgs>;

export const GiftCardFindManyZodSchema = z.object({ select: GiftCardFindManySelectSchema.optional(), include: GiftCardIncludeObjectSchema.optional(), orderBy: z.union([GiftCardOrderByWithRelationInputObjectSchema, GiftCardOrderByWithRelationInputObjectSchema.array()]).optional(), where: GiftCardWhereInputObjectSchema.optional(), cursor: GiftCardWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GiftCardScalarFieldEnumSchema, GiftCardScalarFieldEnumSchema.array()]).optional() }).strict();