import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const WishlistUncheckedUpdateManyWithoutUserInputObjectSchema: z.ZodType<Prisma.WishlistUncheckedUpdateManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistUncheckedUpdateManyWithoutUserInput>;
export const WishlistUncheckedUpdateManyWithoutUserInputObjectZodSchema = makeSchema();
