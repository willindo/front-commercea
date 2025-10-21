import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  wishlistId: z.literal(true).optional()
}).strict();
export const WishlistItemMinAggregateInputObjectSchema: z.ZodType<Prisma.WishlistItemMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WishlistItemMinAggregateInputType>;
export const WishlistItemMinAggregateInputObjectZodSchema = makeSchema();
