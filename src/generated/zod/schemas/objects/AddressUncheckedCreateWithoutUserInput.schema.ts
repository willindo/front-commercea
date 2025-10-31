import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderUncheckedCreateNestedManyWithoutAddressInputObjectSchema as OrderUncheckedCreateNestedManyWithoutAddressInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutAddressInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  line1: z.string(),
  line2: z.string().optional().nullable(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutAddressInputObjectSchema).optional()
}).strict();
export const AddressUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.AddressUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUncheckedCreateWithoutUserInput>;
export const AddressUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
