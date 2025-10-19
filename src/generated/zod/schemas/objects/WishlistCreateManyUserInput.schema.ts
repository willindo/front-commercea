import * as z from 'zod';


const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const WishlistCreateManyUserInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistCreateManyUserInputObjectZodSchema = makeSchema();
