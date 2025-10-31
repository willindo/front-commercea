import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutReviewsInputObjectSchema as UserCreateNestedOneWithoutReviewsInputObjectSchema } from './UserCreateNestedOneWithoutReviewsInput.schema';
import { ProductCreateNestedOneWithoutReviewsInputObjectSchema as ProductCreateNestedOneWithoutReviewsInputObjectSchema } from './ProductCreateNestedOneWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  rating: z.number().int().optional(),
  comment: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutReviewsInputObjectSchema),
  product: z.lazy(() => ProductCreateNestedOneWithoutReviewsInputObjectSchema)
}).strict();
export const ReviewCreateInputObjectSchema: z.ZodType<Prisma.ReviewCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateInput>;
export const ReviewCreateInputObjectZodSchema = makeSchema();
