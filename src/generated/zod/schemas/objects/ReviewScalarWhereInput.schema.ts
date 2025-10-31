import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const reviewscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReviewScalarWhereInputObjectSchema), z.lazy(() => ReviewScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReviewScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReviewScalarWhereInputObjectSchema), z.lazy(() => ReviewScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  productId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  rating: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  comment: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ReviewScalarWhereInputObjectSchema: z.ZodType<Prisma.ReviewScalarWhereInput> = reviewscalarwhereinputSchema as unknown as z.ZodType<Prisma.ReviewScalarWhereInput>;
export const ReviewScalarWhereInputObjectZodSchema = reviewscalarwhereinputSchema;
