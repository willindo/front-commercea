import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageCreateManyOrderInputObjectSchema as CouponUsageCreateManyOrderInputObjectSchema } from './CouponUsageCreateManyOrderInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CouponUsageCreateManyOrderInputObjectSchema), z.lazy(() => CouponUsageCreateManyOrderInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CouponUsageCreateManyOrderInputEnvelopeObjectSchema: z.ZodType<Prisma.CouponUsageCreateManyOrderInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageCreateManyOrderInputEnvelope>;
export const CouponUsageCreateManyOrderInputEnvelopeObjectZodSchema = makeSchema();
