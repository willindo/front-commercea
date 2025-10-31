import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardUsageSelectObjectSchema as GiftCardUsageSelectObjectSchema } from './GiftCardUsageSelect.schema';
import { GiftCardUsageIncludeObjectSchema as GiftCardUsageIncludeObjectSchema } from './GiftCardUsageInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => GiftCardUsageSelectObjectSchema).optional(),
  include: z.lazy(() => GiftCardUsageIncludeObjectSchema).optional()
}).strict();
export const GiftCardUsageArgsObjectSchema = makeSchema();
export const GiftCardUsageArgsObjectZodSchema = makeSchema();
