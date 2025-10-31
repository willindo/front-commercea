import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardCountOutputTypeSelectObjectSchema as GiftCardCountOutputTypeSelectObjectSchema } from './GiftCardCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => GiftCardCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const GiftCardCountOutputTypeArgsObjectSchema = makeSchema();
export const GiftCardCountOutputTypeArgsObjectZodSchema = makeSchema();
