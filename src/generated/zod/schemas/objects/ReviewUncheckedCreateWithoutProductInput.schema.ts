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
export const ReviewUncheckedCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedCreateWithoutProductInput>;
export const ReviewUncheckedCreateWithoutProductInputObjectZodSchema = makeSchema();
