import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { UserIncludeObjectSchema as UserIncludeObjectSchema } from './objects/UserInclude.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './objects/UserOrderByWithRelationInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './objects/UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema';
import { UserScalarFieldEnumSchema } from './enums/UserScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserFindManySelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    password: z.boolean().optional(),
    name: z.boolean().optional(),
    phone: z.boolean().optional(),
    role: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    addresses: z.boolean().optional(),
    cart: z.boolean().optional(),
    orders: z.boolean().optional(),
    payments: z.boolean().optional(),
    wishlists: z.boolean().optional(),
    reviews: z.boolean().optional(),
    giftCards: z.boolean().optional(),
    couponUsages: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UserSelect>;

export const UserFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    password: z.boolean().optional(),
    name: z.boolean().optional(),
    phone: z.boolean().optional(),
    role: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    addresses: z.boolean().optional(),
    cart: z.boolean().optional(),
    orders: z.boolean().optional(),
    payments: z.boolean().optional(),
    wishlists: z.boolean().optional(),
    reviews: z.boolean().optional(),
    giftCards: z.boolean().optional(),
    couponUsages: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const UserFindManySchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({ select: UserFindManySelectSchema.optional(), include: UserIncludeObjectSchema.optional(), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserFindManyArgs>;

export const UserFindManyZodSchema = z.object({ select: UserFindManySelectSchema.optional(), include: UserIncludeObjectSchema.optional(), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict();