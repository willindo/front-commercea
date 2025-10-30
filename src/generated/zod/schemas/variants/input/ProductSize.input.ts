import * as z from 'zod';

import { SizeSchema } from '../../enums/Size.schema';
// prettier-ignore
export const ProductSizeInputSchema = z.object({
    id: z.string(),
    size: SizeSchema,
    quantity: z.number().int(),
    productId: z.string(),
    product: z.unknown()
}).strict();

export type ProductSizeInputType = z.infer<typeof ProductSizeInputSchema>;
