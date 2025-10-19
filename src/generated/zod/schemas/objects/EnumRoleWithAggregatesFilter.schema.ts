import * as z from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { NestedEnumRoleWithAggregatesFilterObjectSchema as NestedEnumRoleWithAggregatesFilterObjectSchema } from './NestedEnumRoleWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumRoleFilterObjectSchema as NestedEnumRoleFilterObjectSchema } from './NestedEnumRoleFilter.schema'

const makeSchema = () => z.object({
  equals: RoleSchema.optional(),
  in: RoleSchema.array().optional(),
  notIn: RoleSchema.array().optional(),
  not: z.union([RoleSchema, z.lazy(() => NestedEnumRoleWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleFilterObjectSchema).optional()
}).strict();
export const EnumRoleWithAggregatesFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const EnumRoleWithAggregatesFilterObjectZodSchema = makeSchema();
