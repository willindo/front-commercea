import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderCreateNestedManyWithoutAddressInputObjectSchema as OrderCreateNestedManyWithoutAddressInputObjectSchema } from './OrderCreateNestedManyWithoutAddressInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  line1: z.string(),
  line2: z.string().optional().nullable(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutAddressInputObjectSchema).optional()
}).strict();
export const AddressCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.AddressCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateWithoutUserInput>;
export const AddressCreateWithoutUserInputObjectZodSchema = makeSchema();
