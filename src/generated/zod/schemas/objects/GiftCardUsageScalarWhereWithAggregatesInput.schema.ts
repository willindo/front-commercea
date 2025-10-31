import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const giftcardusagescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => GiftCardUsageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GiftCardUsageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GiftCardUsageScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GiftCardUsageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GiftCardUsageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  giftCardId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  orderId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  amountUsed: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional(),
  usedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const GiftCardUsageScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.GiftCardUsageScalarWhereWithAggregatesInput> = giftcardusagescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.GiftCardUsageScalarWhereWithAggregatesInput>;
export const GiftCardUsageScalarWhereWithAggregatesInputObjectZodSchema = giftcardusagescalarwherewithaggregatesinputSchema;
