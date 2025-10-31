import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const addressscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AddressScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AddressScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AddressScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AddressScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AddressScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  line1: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  line2: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  city: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  state: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  postalCode: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  country: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const AddressScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AddressScalarWhereWithAggregatesInput> = addressscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AddressScalarWhereWithAggregatesInput>;
export const AddressScalarWhereWithAggregatesInputObjectZodSchema = addressscalarwherewithaggregatesinputSchema;
