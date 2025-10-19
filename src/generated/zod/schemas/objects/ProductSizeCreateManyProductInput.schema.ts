import * as z from 'zod';
import { SizeSchema } from '../enums/Size.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  size: SizeSchema,
  quantity: z.number().int().optional()
}).strict();
export const ProductSizeCreateManyProductInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductSizeCreateManyProductInputObjectZodSchema = makeSchema();
