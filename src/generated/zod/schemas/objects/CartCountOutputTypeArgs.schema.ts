import * as z from 'zod';
import { CartCountOutputTypeSelectObjectSchema as CartCountOutputTypeSelectObjectSchema } from './CartCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CartCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const CartCountOutputTypeArgsObjectSchema = makeSchema();
export const CartCountOutputTypeArgsObjectZodSchema = makeSchema();
