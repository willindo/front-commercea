import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { SizeSchema } from '../enums/Size.schema';
import { NullableEnumSizeFieldUpdateOperationsInputObjectSchema as NullableEnumSizeFieldUpdateOperationsInputObjectSchema } from './NullableEnumSizeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema as NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { ProductUpdateOneRequiredWithoutCartItemsNestedInputObjectSchema as ProductUpdateOneRequiredWithoutCartItemsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutCartItemsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  size: z.union([SizeSchema, z.lazy(() => NullableEnumSizeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  productName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  productPrice: z.union([z.number(), z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  productImage: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  productDescription: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutCartItemsNestedInputObjectSchema).optional()
}).strict();
export const CartItemUpdateWithoutCartInputObjectSchema: z.ZodType<Prisma.CartItemUpdateWithoutCartInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUpdateWithoutCartInput>;
export const CartItemUpdateWithoutCartInputObjectZodSchema = makeSchema();
