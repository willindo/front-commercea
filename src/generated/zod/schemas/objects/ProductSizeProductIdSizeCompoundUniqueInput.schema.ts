import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SizeSchema } from '../enums/Size.schema'

const makeSchema = () => z.object({
  productId: z.string(),
  size: SizeSchema
}).strict();
export const ProductSizeProductIdSizeCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ProductSizeProductIdSizeCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeProductIdSizeCompoundUniqueInput>;
export const ProductSizeProductIdSizeCompoundUniqueInputObjectZodSchema = makeSchema();
