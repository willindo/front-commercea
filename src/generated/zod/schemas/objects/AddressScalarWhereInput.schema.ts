import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const addressscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AddressScalarWhereInputObjectSchema), z.lazy(() => AddressScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AddressScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AddressScalarWhereInputObjectSchema), z.lazy(() => AddressScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  line1: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  line2: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  city: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  state: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  postalCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  country: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const AddressScalarWhereInputObjectSchema: z.ZodType<Prisma.AddressScalarWhereInput> = addressscalarwhereinputSchema as unknown as z.ZodType<Prisma.AddressScalarWhereInput>;
export const AddressScalarWhereInputObjectZodSchema = addressscalarwhereinputSchema;
