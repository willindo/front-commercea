import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  wishlistId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const WishlistItemUncheckedUpdateWithoutProductInputObjectSchema: z.ZodType<Prisma.WishlistItemUncheckedUpdateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistItemUncheckedUpdateWithoutProductInput>;
export const WishlistItemUncheckedUpdateWithoutProductInputObjectZodSchema = makeSchema();
