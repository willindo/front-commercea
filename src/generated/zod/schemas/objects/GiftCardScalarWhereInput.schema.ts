import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const giftcardscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GiftCardScalarWhereInputObjectSchema), z.lazy(() => GiftCardScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GiftCardScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GiftCardScalarWhereInputObjectSchema), z.lazy(() => GiftCardScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  balance: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  issuedBy: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const GiftCardScalarWhereInputObjectSchema: z.ZodType<Prisma.GiftCardScalarWhereInput> = giftcardscalarwhereinputSchema as unknown as z.ZodType<Prisma.GiftCardScalarWhereInput>;
export const GiftCardScalarWhereInputObjectZodSchema = giftcardscalarwhereinputSchema;
