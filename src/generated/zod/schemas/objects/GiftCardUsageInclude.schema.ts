import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardArgsObjectSchema as GiftCardArgsObjectSchema } from './GiftCardArgs.schema';
import { OrderArgsObjectSchema as OrderArgsObjectSchema } from './OrderArgs.schema'

const makeSchema = () => z.object({
  giftCard: z.union([z.boolean(), z.lazy(() => GiftCardArgsObjectSchema)]).optional(),
  order: z.union([z.boolean(), z.lazy(() => OrderArgsObjectSchema)]).optional()
}).strict();
export const GiftCardUsageIncludeObjectSchema: z.ZodType<Prisma.GiftCardUsageInclude> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageInclude>;
export const GiftCardUsageIncludeObjectZodSchema = makeSchema();
