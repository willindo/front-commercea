import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardArgsObjectSchema as GiftCardArgsObjectSchema } from './GiftCardArgs.schema';
import { OrderArgsObjectSchema as OrderArgsObjectSchema } from './OrderArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  giftCardId: z.boolean().optional(),
  orderId: z.boolean().optional(),
  amountUsed: z.boolean().optional(),
  usedAt: z.boolean().optional(),
  giftCard: z.union([z.boolean(), z.lazy(() => GiftCardArgsObjectSchema)]).optional(),
  order: z.union([z.boolean(), z.lazy(() => OrderArgsObjectSchema)]).optional()
}).strict();
export const GiftCardUsageSelectObjectSchema: z.ZodType<Prisma.GiftCardUsageSelect> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageSelect>;
export const GiftCardUsageSelectObjectZodSchema = makeSchema();
