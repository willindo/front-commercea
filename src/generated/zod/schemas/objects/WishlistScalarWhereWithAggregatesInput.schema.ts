import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const wishlistscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WishlistScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WishlistScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WishlistScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WishlistScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WishlistScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WishlistScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WishlistScalarWhereWithAggregatesInput> = wishlistscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WishlistScalarWhereWithAggregatesInput>;
export const WishlistScalarWhereWithAggregatesInputObjectZodSchema = wishlistscalarwherewithaggregatesinputSchema;
