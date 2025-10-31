import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { NullableEnumGenderFieldUpdateOperationsInputObjectSchema as NullableEnumGenderFieldUpdateOperationsInputObjectSchema } from './NullableEnumGenderFieldUpdateOperationsInput.schema';
import { ProductUpdateimagesInputObjectSchema as ProductUpdateimagesInputObjectSchema } from './ProductUpdateimagesInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CartItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema as CartItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './CartItemUncheckedUpdateManyWithoutProductNestedInput.schema';
import { OrderItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema as OrderItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './OrderItemUncheckedUpdateManyWithoutProductNestedInput.schema';
import { WishlistItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema as WishlistItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './WishlistItemUncheckedUpdateManyWithoutProductNestedInput.schema';
import { ReviewUncheckedUpdateManyWithoutProductNestedInputObjectSchema as ReviewUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutProductNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  price: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  stock: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  categoryId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  gender: z.union([GenderSchema, z.lazy(() => NullableEnumGenderFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  images: z.union([z.lazy(() => ProductUpdateimagesInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  cartItems: z.lazy(() => CartItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema).optional(),
  wishlistItems: z.lazy(() => WishlistItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutProductNestedInputObjectSchema).optional()
}).strict();
export const ProductUncheckedUpdateWithoutSizesInputObjectSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutSizesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUncheckedUpdateWithoutSizesInput>;
export const ProductUncheckedUpdateWithoutSizesInputObjectZodSchema = makeSchema();
