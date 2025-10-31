import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardCreateNestedOneWithoutUsagesInputObjectSchema as GiftCardCreateNestedOneWithoutUsagesInputObjectSchema } from './GiftCardCreateNestedOneWithoutUsagesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  amountUsed: z.number(),
  usedAt: z.coerce.date().optional(),
  giftCard: z.lazy(() => GiftCardCreateNestedOneWithoutUsagesInputObjectSchema)
}).strict();
export const GiftCardUsageCreateWithoutOrderInputObjectSchema: z.ZodType<Prisma.GiftCardUsageCreateWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageCreateWithoutOrderInput>;
export const GiftCardUsageCreateWithoutOrderInputObjectZodSchema = makeSchema();
