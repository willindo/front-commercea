import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardUsageCreateManyGiftCardInputObjectSchema as GiftCardUsageCreateManyGiftCardInputObjectSchema } from './GiftCardUsageCreateManyGiftCardInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => GiftCardUsageCreateManyGiftCardInputObjectSchema), z.lazy(() => GiftCardUsageCreateManyGiftCardInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const GiftCardUsageCreateManyGiftCardInputEnvelopeObjectSchema: z.ZodType<Prisma.GiftCardUsageCreateManyGiftCardInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageCreateManyGiftCardInputEnvelope>;
export const GiftCardUsageCreateManyGiftCardInputEnvelopeObjectZodSchema = makeSchema();
