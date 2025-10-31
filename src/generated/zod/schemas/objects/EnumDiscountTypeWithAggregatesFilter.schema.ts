import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiscountTypeSchema } from '../enums/DiscountType.schema';
import { NestedEnumDiscountTypeWithAggregatesFilterObjectSchema as NestedEnumDiscountTypeWithAggregatesFilterObjectSchema } from './NestedEnumDiscountTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumDiscountTypeFilterObjectSchema as NestedEnumDiscountTypeFilterObjectSchema } from './NestedEnumDiscountTypeFilter.schema'

const makeSchema = () => z.object({
  equals: DiscountTypeSchema.optional(),
  in: DiscountTypeSchema.array().optional(),
  notIn: DiscountTypeSchema.array().optional(),
  not: z.union([DiscountTypeSchema, z.lazy(() => NestedEnumDiscountTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumDiscountTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumDiscountTypeFilterObjectSchema).optional()
}).strict();
export const EnumDiscountTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumDiscountTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDiscountTypeWithAggregatesFilter>;
export const EnumDiscountTypeWithAggregatesFilterObjectZodSchema = makeSchema();
