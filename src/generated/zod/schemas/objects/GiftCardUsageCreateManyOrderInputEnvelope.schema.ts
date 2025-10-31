import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardUsageCreateManyOrderInputObjectSchema as GiftCardUsageCreateManyOrderInputObjectSchema } from './GiftCardUsageCreateManyOrderInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => GiftCardUsageCreateManyOrderInputObjectSchema), z.lazy(() => GiftCardUsageCreateManyOrderInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const GiftCardUsageCreateManyOrderInputEnvelopeObjectSchema: z.ZodType<Prisma.GiftCardUsageCreateManyOrderInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageCreateManyOrderInputEnvelope>;
export const GiftCardUsageCreateManyOrderInputEnvelopeObjectZodSchema = makeSchema();
