import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CartItemUncheckedUpdateManyWithoutCartNestedInputObjectSchema as CartItemUncheckedUpdateManyWithoutCartNestedInputObjectSchema } from './CartItemUncheckedUpdateManyWithoutCartNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  items: z.lazy(() => CartItemUncheckedUpdateManyWithoutCartNestedInputObjectSchema).optional()
}).strict();
export const CartUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();
