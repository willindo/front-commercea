import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumRoleFilterObjectSchema as NestedEnumRoleFilterObjectSchema } from './NestedEnumRoleFilter.schema'

const nestedenumrolewithaggregatesfilterSchema = z.object({
  equals: RoleSchema.optional(),
  in: RoleSchema.array().optional(),
  notIn: RoleSchema.array().optional(),
  not: z.union([RoleSchema, z.lazy(() => NestedEnumRoleWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleFilterObjectSchema).optional()
}).strict();
export const NestedEnumRoleWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumRoleWithAggregatesFilter> = nestedenumrolewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumRoleWithAggregatesFilter>;
export const NestedEnumRoleWithAggregatesFilterObjectZodSchema = nestedenumrolewithaggregatesfilterSchema;
