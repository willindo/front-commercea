import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutAddressesNestedInputObjectSchema as UserUpdateOneWithoutAddressesNestedInputObjectSchema } from './UserUpdateOneWithoutAddressesNestedInput.schema';
import { OrderUpdateManyWithoutAddressNestedInputObjectSchema as OrderUpdateManyWithoutAddressNestedInputObjectSchema } from './OrderUpdateManyWithoutAddressNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  line1: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  line2: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  city: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  state: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  postalCode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  country: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutAddressesNestedInputObjectSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutAddressNestedInputObjectSchema).optional()
}).strict();
export const AddressUpdateInputObjectSchema: z.ZodType<Prisma.AddressUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUpdateInput>;
export const AddressUpdateInputObjectZodSchema = makeSchema();
