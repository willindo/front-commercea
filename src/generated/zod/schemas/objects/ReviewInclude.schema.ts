import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const ReviewIncludeObjectSchema: z.ZodType<Prisma.ReviewInclude> = makeSchema() as unknown as z.ZodType<Prisma.ReviewInclude>;
export const ReviewIncludeObjectZodSchema = makeSchema();
