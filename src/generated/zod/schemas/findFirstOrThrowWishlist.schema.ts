import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WishlistIncludeObjectSchema as WishlistIncludeObjectSchema } from './objects/WishlistInclude.schema';
import { WishlistOrderByWithRelationInputObjectSchema as WishlistOrderByWithRelationInputObjectSchema } from './objects/WishlistOrderByWithRelationInput.schema';
import { WishlistWhereInputObjectSchema as WishlistWhereInputObjectSchema } from './objects/WishlistWhereInput.schema';
import { WishlistWhereUniqueInputObjectSchema as WishlistWhereUniqueInputObjectSchema } from './objects/WishlistWhereUniqueInput.schema';
import { WishlistScalarFieldEnumSchema } from './enums/WishlistScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WishlistFindFirstOrThrowSelectSchema: z.ZodType<Prisma.WishlistSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    user: z.boolean().optional(),
    items: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WishlistSelect>;

export const WishlistFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    user: z.boolean().optional(),
    items: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const WishlistFindFirstOrThrowSchema: z.ZodType<Prisma.WishlistFindFirstOrThrowArgs> = z.object({ select: WishlistFindFirstOrThrowSelectSchema.optional(), include: WishlistIncludeObjectSchema.optional(), orderBy: z.union([WishlistOrderByWithRelationInputObjectSchema, WishlistOrderByWithRelationInputObjectSchema.array()]).optional(), where: WishlistWhereInputObjectSchema.optional(), cursor: WishlistWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WishlistScalarFieldEnumSchema, WishlistScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WishlistFindFirstOrThrowArgs>;

export const WishlistFindFirstOrThrowZodSchema = z.object({ select: WishlistFindFirstOrThrowSelectSchema.optional(), include: WishlistIncludeObjectSchema.optional(), orderBy: z.union([WishlistOrderByWithRelationInputObjectSchema, WishlistOrderByWithRelationInputObjectSchema.array()]).optional(), where: WishlistWhereInputObjectSchema.optional(), cursor: WishlistWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WishlistScalarFieldEnumSchema, WishlistScalarFieldEnumSchema.array()]).optional() }).strict();