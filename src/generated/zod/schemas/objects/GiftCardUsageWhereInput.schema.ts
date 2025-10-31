import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { GiftCardScalarRelationFilterObjectSchema as GiftCardScalarRelationFilterObjectSchema } from './GiftCardScalarRelationFilter.schema';
import { GiftCardWhereInputObjectSchema as GiftCardWhereInputObjectSchema } from './GiftCardWhereInput.schema';
import { OrderNullableScalarRelationFilterObjectSchema as OrderNullableScalarRelationFilterObjectSchema } from './OrderNullableScalarRelationFilter.schema';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema'

const giftcardusagewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GiftCardUsageWhereInputObjectSchema), z.lazy(() => GiftCardUsageWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GiftCardUsageWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GiftCardUsageWhereInputObjectSchema), z.lazy(() => GiftCardUsageWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  giftCardId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  orderId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  amountUsed: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  usedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  giftCard: z.union([z.lazy(() => GiftCardScalarRelationFilterObjectSchema), z.lazy(() => GiftCardWhereInputObjectSchema)]).optional(),
  order: z.union([z.lazy(() => OrderNullableScalarRelationFilterObjectSchema), z.lazy(() => OrderWhereInputObjectSchema)]).optional()
}).strict();
export const GiftCardUsageWhereInputObjectSchema: z.ZodType<Prisma.GiftCardUsageWhereInput> = giftcardusagewhereinputSchema as unknown as z.ZodType<Prisma.GiftCardUsageWhereInput>;
export const GiftCardUsageWhereInputObjectZodSchema = giftcardusagewhereinputSchema;
