import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCreateManyProductInputObjectSchema as ReviewCreateManyProductInputObjectSchema } from './ReviewCreateManyProductInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReviewCreateManyProductInputObjectSchema), z.lazy(() => ReviewCreateManyProductInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReviewCreateManyProductInputEnvelopeObjectSchema: z.ZodType<Prisma.ReviewCreateManyProductInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateManyProductInputEnvelope>;
export const ReviewCreateManyProductInputEnvelopeObjectZodSchema = makeSchema();
