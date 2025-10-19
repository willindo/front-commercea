import * as z from 'zod';
export const CategoryDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  products: z.array(z.unknown())
}));