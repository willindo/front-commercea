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
import { CategoryUpdateOneWithoutProductsNestedInputObjectSchema as CategoryUpdateOneWithoutProductsNestedInputObjectSchema } from './CategoryUpdateOneWithoutProductsNestedInput.schema';
import { ProductSizeUpdateManyWithoutProductNestedInputObjectSchema as ProductSizeUpdateManyWithoutProductNestedInputObjectSchema } from './ProductSizeUpdateManyWithoutProductNestedInput.schema';
import { CartItemUpdateManyWithoutProductNestedInputObjectSchema as CartItemUpdateManyWithoutProductNestedInputObjectSchema } from './CartItemUpdateManyWithoutProductNestedInput.schema';
import { OrderItemUpdateManyWithoutProductNestedInputObjectSchema as OrderItemUpdateManyWithoutProductNestedInputObjectSchema } from './OrderItemUpdateManyWithoutProductNestedInput.schema';
import { WishlistItemUpdateManyWithoutProductNestedInputObjectSchema as WishlistItemUpdateManyWithoutProductNestedInputObjectSchema } from './WishlistItemUpdateManyWithoutProductNestedInput.schema';
import { ReviewUpdateManyWithoutProductNestedInputObjectSchema as ReviewUpdateManyWithoutProductNestedInputObjectSchema } from './ReviewUpdateManyWithoutProductNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  price: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  stock: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  gender: z.union([GenderSchema, z.lazy(() => NullableEnumGenderFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  images: z.union([z.lazy(() => ProductUpdateimagesInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  category: z.lazy(() => CategoryUpdateOneWithoutProductsNestedInputObjectSchema).optional(),
  sizes: z.lazy(() => ProductSizeUpdateManyWithoutProductNestedInputObjectSchema).optional(),
  cartItems: z.lazy(() => CartItemUpdateManyWithoutProductNestedInputObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemUpdateManyWithoutProductNestedInputObjectSchema).optional(),
  wishlistItems: z.lazy(() => WishlistItemUpdateManyWithoutProductNestedInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutProductNestedInputObjectSchema).optional()
}).strict();
export const ProductUpdateInputObjectSchema: z.ZodType<Prisma.ProductUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateInput>;
export const ProductUpdateInputObjectZodSchema = makeSchema();
