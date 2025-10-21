import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const WishlistCreateManyInputObjectSchema: z.ZodType<Prisma.WishlistCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistCreateManyInput>;
export const WishlistCreateManyInputObjectZodSchema = makeSchema();
