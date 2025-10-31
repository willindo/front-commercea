import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageCreateManyUserInputObjectSchema as CouponUsageCreateManyUserInputObjectSchema } from './CouponUsageCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CouponUsageCreateManyUserInputObjectSchema), z.lazy(() => CouponUsageCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CouponUsageCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.CouponUsageCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageCreateManyUserInputEnvelope>;
export const CouponUsageCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
