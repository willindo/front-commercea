import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  productId: z.string(),
  rating: z.number().int().optional(),
  comment: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ReviewUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedCreateInput>;
export const ReviewUncheckedCreateInputObjectZodSchema = makeSchema();
