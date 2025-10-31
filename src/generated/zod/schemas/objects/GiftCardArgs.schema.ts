import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardSelectObjectSchema as GiftCardSelectObjectSchema } from './GiftCardSelect.schema';
import { GiftCardIncludeObjectSchema as GiftCardIncludeObjectSchema } from './GiftCardInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => GiftCardSelectObjectSchema).optional(),
  include: z.lazy(() => GiftCardIncludeObjectSchema).optional()
}).strict();
export const GiftCardArgsObjectSchema = makeSchema();
export const GiftCardArgsObjectZodSchema = makeSchema();
