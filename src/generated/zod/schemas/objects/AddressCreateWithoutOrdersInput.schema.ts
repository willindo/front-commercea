import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutAddressesInputObjectSchema as UserCreateNestedOneWithoutAddressesInputObjectSchema } from './UserCreateNestedOneWithoutAddressesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  line1: z.string(),
  line2: z.string().optional().nullable(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutAddressesInputObjectSchema).optional()
}).strict();
export const AddressCreateWithoutOrdersInputObjectSchema: z.ZodType<Prisma.AddressCreateWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateWithoutOrdersInput>;
export const AddressCreateWithoutOrdersInputObjectZodSchema = makeSchema();
