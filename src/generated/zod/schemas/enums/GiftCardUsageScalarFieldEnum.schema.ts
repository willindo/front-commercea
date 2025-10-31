import * as z from 'zod';

export const GiftCardUsageScalarFieldEnumSchema = z.enum(['id', 'giftCardId', 'orderId', 'amountUsed', 'usedAt'])

export type GiftCardUsageScalarFieldEnum = z.infer<typeof GiftCardUsageScalarFieldEnumSchema>;