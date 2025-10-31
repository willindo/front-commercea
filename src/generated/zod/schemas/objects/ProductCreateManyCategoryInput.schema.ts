import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GenderSchema } from '../enums/Gender.schema';
import { ProductCreateimagesInputObjectSchema as ProductCreateimagesInputObjectSchema } from './ProductCreateimagesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  price: z.number(),
  stock: z.number().int().optional(),
  gender: GenderSchema.optional().nullable(),
  images: z.union([z.lazy(() => ProductCreateimagesInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ProductCreateManyCategoryInputObjectSchema: z.ZodType<Prisma.ProductCreateManyCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateManyCategoryInput>;
export const ProductCreateManyCategoryInputObjectZodSchema = makeSchema();
