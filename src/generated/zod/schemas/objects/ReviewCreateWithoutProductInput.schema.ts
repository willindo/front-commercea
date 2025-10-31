import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutReviewsInputObjectSchema as UserCreateNestedOneWithoutReviewsInputObjectSchema } from './UserCreateNestedOneWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  rating: z.number().int().optional(),
  comment: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutReviewsInputObjectSchema)
}).strict();
export const ReviewCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.ReviewCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateWithoutProductInput>;
export const ReviewCreateWithoutProductInputObjectZodSchema = makeSchema();
