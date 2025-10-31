import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderCreateManyAddressInputObjectSchema as OrderCreateManyAddressInputObjectSchema } from './OrderCreateManyAddressInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OrderCreateManyAddressInputObjectSchema), z.lazy(() => OrderCreateManyAddressInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const OrderCreateManyAddressInputEnvelopeObjectSchema: z.ZodType<Prisma.OrderCreateManyAddressInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateManyAddressInputEnvelope>;
export const OrderCreateManyAddressInputEnvelopeObjectZodSchema = makeSchema();
