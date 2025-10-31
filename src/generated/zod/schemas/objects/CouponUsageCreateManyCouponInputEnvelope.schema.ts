import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageCreateManyCouponInputObjectSchema as CouponUsageCreateManyCouponInputObjectSchema } from './CouponUsageCreateManyCouponInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CouponUsageCreateManyCouponInputObjectSchema), z.lazy(() => CouponUsageCreateManyCouponInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CouponUsageCreateManyCouponInputEnvelopeObjectSchema: z.ZodType<Prisma.CouponUsageCreateManyCouponInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageCreateManyCouponInputEnvelope>;
export const CouponUsageCreateManyCouponInputEnvelopeObjectZodSchema = makeSchema();
