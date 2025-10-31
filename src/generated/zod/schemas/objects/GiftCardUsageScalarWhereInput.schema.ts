import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const giftcardusagescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GiftCardUsageScalarWhereInputObjectSchema), z.lazy(() => GiftCardUsageScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GiftCardUsageScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GiftCardUsageScalarWhereInputObjectSchema), z.lazy(() => GiftCardUsageScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  giftCardId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  orderId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  amountUsed: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  usedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const GiftCardUsageScalarWhereInputObjectSchema: z.ZodType<Prisma.GiftCardUsageScalarWhereInput> = giftcardusagescalarwhereinputSchema as unknown as z.ZodType<Prisma.GiftCardUsageScalarWhereInput>;
export const GiftCardUsageScalarWhereInputObjectZodSchema = giftcardusagescalarwhereinputSchema;
