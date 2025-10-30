import * as z from 'zod';
export const ProductSizeCreateResultSchema = z.object({
  id: z.string(),
  size: z.unknown(),
  quantity: z.number().int(),
  productId: z.string(),
  product: z.unknown()
});