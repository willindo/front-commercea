import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { WishlistItemUncheckedUpdateManyWithoutWishlistNestedInputObjectSchema as WishlistItemUncheckedUpdateManyWithoutWishlistNestedInputObjectSchema } from './WishlistItemUncheckedUpdateManyWithoutWishlistNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  items: z.lazy(() => WishlistItemUncheckedUpdateManyWithoutWishlistNestedInputObjectSchema).optional()
}).strict();
export const WishlistUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.WishlistUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistUncheckedUpdateInput>;
export const WishlistUncheckedUpdateInputObjectZodSchema = makeSchema();
