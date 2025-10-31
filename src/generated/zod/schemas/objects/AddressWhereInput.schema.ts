import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { OrderListRelationFilterObjectSchema as OrderListRelationFilterObjectSchema } from './OrderListRelationFilter.schema'

const addresswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AddressWhereInputObjectSchema), z.lazy(() => AddressWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AddressWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AddressWhereInputObjectSchema), z.lazy(() => AddressWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  line1: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  line2: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  city: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  state: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  postalCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  country: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  orders: z.lazy(() => OrderListRelationFilterObjectSchema).optional()
}).strict();
export const AddressWhereInputObjectSchema: z.ZodType<Prisma.AddressWhereInput> = addresswhereinputSchema as unknown as z.ZodType<Prisma.AddressWhereInput>;
export const AddressWhereInputObjectZodSchema = addresswhereinputSchema;
