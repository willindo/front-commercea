import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProductSizeIncludeObjectSchema as ProductSizeIncludeObjectSchema } from './objects/ProductSizeInclude.schema';
import { ProductSizeOrderByWithRelationInputObjectSchema as ProductSizeOrderByWithRelationInputObjectSchema } from './objects/ProductSizeOrderByWithRelationInput.schema';
import { ProductSizeWhereInputObjectSchema as ProductSizeWhereInputObjectSchema } from './objects/ProductSizeWhereInput.schema';
import { ProductSizeWhereUniqueInputObjectSchema as ProductSizeWhereUniqueInputObjectSchema } from './objects/ProductSizeWhereUniqueInput.schema';
import { ProductSizeScalarFieldEnumSchema } from './enums/ProductSizeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductSizeFindFirstSelectSchema: z.ZodType<Prisma.ProductSizeSelect> = z.object({
    id: z.boolean().optional(),
    size: z.boolean().optional(),
    quantity: z.boolean().optional(),
    product: z.boolean().optional(),
    productId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProductSizeSelect>;

export const ProductSizeFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    size: z.boolean().optional(),
    quantity: z.boolean().optional(),
    product: z.boolean().optional(),
    productId: z.boolean().optional()
  }).strict();

export const ProductSizeFindFirstSchema: z.ZodType<Prisma.ProductSizeFindFirstArgs> = z.object({ select: ProductSizeFindFirstSelectSchema.optional(), include: ProductSizeIncludeObjectSchema.optional(), orderBy: z.union([ProductSizeOrderByWithRelationInputObjectSchema, ProductSizeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductSizeWhereInputObjectSchema.optional(), cursor: ProductSizeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductSizeScalarFieldEnumSchema, ProductSizeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProductSizeFindFirstArgs>;

export const ProductSizeFindFirstZodSchema = z.object({ select: ProductSizeFindFirstSelectSchema.optional(), include: ProductSizeIncludeObjectSchema.optional(), orderBy: z.union([ProductSizeOrderByWithRelationInputObjectSchema, ProductSizeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductSizeWhereInputObjectSchema.optional(), cursor: ProductSizeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductSizeScalarFieldEnumSchema, ProductSizeScalarFieldEnumSchema.array()]).optional() }).strict();