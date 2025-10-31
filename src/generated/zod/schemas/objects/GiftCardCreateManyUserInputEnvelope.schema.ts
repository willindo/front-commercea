import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardCreateManyUserInputObjectSchema as GiftCardCreateManyUserInputObjectSchema } from './GiftCardCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => GiftCardCreateManyUserInputObjectSchema), z.lazy(() => GiftCardCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const GiftCardCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.GiftCardCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardCreateManyUserInputEnvelope>;
export const GiftCardCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
