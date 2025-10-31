import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductCreateNestedOneWithoutReviewsInputObjectSchema as ProductCreateNestedOneWithoutReviewsInputObjectSchema } from './ProductCreateNestedOneWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  rating: z.number().int().optional(),
  comment: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutReviewsInputObjectSchema)
}).strict();
export const ReviewCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ReviewCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateWithoutUserInput>;
export const ReviewCreateWithoutUserInputObjectZodSchema = makeSchema();
