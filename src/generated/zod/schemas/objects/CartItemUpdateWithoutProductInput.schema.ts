import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { SizeSchema } from '../enums/Size.schema';
import { NullableEnumSizeFieldUpdateOperationsInputObjectSchema as NullableEnumSizeFieldUpdateOperationsInputObjectSchema } from './NullableEnumSizeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { CartUpdateOneRequiredWithoutItemsNestedInputObjectSchema as CartUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './CartUpdateOneRequiredWithoutItemsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  size: z.union([SizeSchema, z.lazy(() => NullableEnumSizeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  productName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  productPrice: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  productDescription: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  productImage: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cart: z.lazy(() => CartUpdateOneRequiredWithoutItemsNestedInputObjectSchema).optional()
}).strict();
export const CartItemUpdateWithoutProductInputObjectSchema: z.ZodType<Prisma.CartItemUpdateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUpdateWithoutProductInput>;
export const CartItemUpdateWithoutProductInputObjectZodSchema = makeSchema();
