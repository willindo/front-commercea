import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { OrderUncheckedUpdateManyWithoutAddressNestedInputObjectSchema as OrderUncheckedUpdateManyWithoutAddressNestedInputObjectSchema } from './OrderUncheckedUpdateManyWithoutAddressNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  line1: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  line2: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  city: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  state: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  postalCode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  country: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutAddressNestedInputObjectSchema).optional()
}).strict();
export const AddressUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.AddressUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUncheckedUpdateInput>;
export const AddressUncheckedUpdateInputObjectZodSchema = makeSchema();
