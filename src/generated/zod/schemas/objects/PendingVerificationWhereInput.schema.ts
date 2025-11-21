import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const pendingverificationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PendingVerificationWhereInputObjectSchema), z.lazy(() => PendingVerificationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PendingVerificationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PendingVerificationWhereInputObjectSchema), z.lazy(() => PendingVerificationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const PendingVerificationWhereInputObjectSchema: z.ZodType<Prisma.PendingVerificationWhereInput> = pendingverificationwhereinputSchema as unknown as z.ZodType<Prisma.PendingVerificationWhereInput>;
export const PendingVerificationWhereInputObjectZodSchema = pendingverificationwhereinputSchema;
