import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderUncheckedCreateNestedManyWithoutAddressInputObjectSchema as OrderUncheckedCreateNestedManyWithoutAddressInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutAddressInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string().optional().nullable(),
  line1: z.string(),
  line2: z.string().optional().nullable(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutAddressInputObjectSchema)
}).strict();
export const AddressUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AddressUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUncheckedCreateInput>;
export const AddressUncheckedCreateInputObjectZodSchema = makeSchema();
