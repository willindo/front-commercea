import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SizeSchema } from '../enums/Size.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  size: SizeSchema,
  quantity: z.number().int().optional(),
  productId: z.string()
}).strict();
export const ProductSizeCreateManyInputObjectSchema: z.ZodType<Prisma.ProductSizeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeCreateManyInput>;
export const ProductSizeCreateManyInputObjectZodSchema = makeSchema();
