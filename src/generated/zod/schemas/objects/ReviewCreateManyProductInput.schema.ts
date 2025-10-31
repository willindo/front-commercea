import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  rating: z.number().int().optional(),
  comment: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ReviewCreateManyProductInputObjectSchema: z.ZodType<Prisma.ReviewCreateManyProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateManyProductInput>;
export const ReviewCreateManyProductInputObjectZodSchema = makeSchema();
