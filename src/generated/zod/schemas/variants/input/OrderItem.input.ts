import * as z from 'zod';

import { SizeSchema } from '../../enums/Size.schema';
// prettier-ignore
export const OrderItemInputSchema = z.object({
    id: z.string(),
    orderId: z.string(),
    productId: z.string(),
    quantity: z.number().int(),
    priceAtPurchase: z.number(),
    size: SizeSchema.optional().nullable(),
    order: z.unknown(),
    product: z.unknown()
}).strict();

export type OrderItemInputType = z.infer<typeof OrderItemInputSchema>;
