import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProductIncludeObjectSchema as ProductIncludeObjectSchema } from './objects/ProductInclude.schema';
import { ProductOrderByWithRelationInputObjectSchema as ProductOrderByWithRelationInputObjectSchema } from './objects/ProductOrderByWithRelationInput.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './objects/ProductWhereInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './objects/ProductWhereUniqueInput.schema';
import { ProductScalarFieldEnumSchema } from './enums/ProductScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductFindManySelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    price: z.boolean().optional(),
    stock: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    images: z.boolean().optional(),
    categoryId: z.boolean().optional(),
    gender: z.boolean().optional(),
    cartItems: z.boolean().optional(),
    orderItems: z.boolean().optional(),
    category: z.boolean().optional(),
    sizes: z.boolean().optional(),
    wishlistItems: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProductSelect>;

export const ProductFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    price: z.boolean().optional(),
    stock: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    images: z.boolean().optional(),
    categoryId: z.boolean().optional(),
    gender: z.boolean().optional(),
    cartItems: z.boolean().optional(),
    orderItems: z.boolean().optional(),
    category: z.boolean().optional(),
    sizes: z.boolean().optional(),
    wishlistItems: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ProductFindManySchema: z.ZodType<Prisma.ProductFindManyArgs> = z.object({ select: ProductFindManySelectSchema.optional(), include: ProductIncludeObjectSchema.optional(), orderBy: z.union([ProductOrderByWithRelationInputObjectSchema, ProductOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductWhereInputObjectSchema.optional(), cursor: ProductWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductScalarFieldEnumSchema, ProductScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProductFindManyArgs>;

export const ProductFindManyZodSchema = z.object({ select: ProductFindManySelectSchema.optional(), include: ProductIncludeObjectSchema.optional(), orderBy: z.union([ProductOrderByWithRelationInputObjectSchema, ProductOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductWhereInputObjectSchema.optional(), cursor: ProductWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductScalarFieldEnumSchema, ProductScalarFieldEnumSchema.array()]).optional() }).strict();