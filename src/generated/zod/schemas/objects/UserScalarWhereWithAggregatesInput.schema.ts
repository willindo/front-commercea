import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumRoleWithAggregatesFilterObjectSchema as EnumRoleWithAggregatesFilterObjectSchema } from './EnumRoleWithAggregatesFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const userscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  role: z.union([z.lazy(() => EnumRoleWithAggregatesFilterObjectSchema), RoleSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const UserScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = userscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.UserScalarWhereWithAggregatesInput>;
export const UserScalarWhereWithAggregatesInputObjectZodSchema = userscalarwherewithaggregatesinputSchema;
