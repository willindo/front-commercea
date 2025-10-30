import * as z from 'zod';
export const ProductSizeUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  size: z.unknown(),
  quantity: z.number().int(),
  productId: z.string(),
  product: z.unknown()
}));