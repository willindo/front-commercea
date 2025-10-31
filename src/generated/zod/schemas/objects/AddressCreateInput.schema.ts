import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutAddressesInputObjectSchema as UserCreateNestedOneWithoutAddressesInputObjectSchema } from './UserCreateNestedOneWithoutAddressesInput.schema';
import { OrderCreateNestedManyWithoutAddressInputObjectSchema as OrderCreateNestedManyWithoutAddressInputObjectSchema } from './OrderCreateNestedManyWithoutAddressInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  line1: z.string(),
  line2: z.string().optional().nullable(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutAddressesInputObjectSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutAddressInputObjectSchema)
}).strict();
export const AddressCreateInputObjectSchema: z.ZodType<Prisma.AddressCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateInput>;
export const AddressCreateInputObjectZodSchema = makeSchema();
