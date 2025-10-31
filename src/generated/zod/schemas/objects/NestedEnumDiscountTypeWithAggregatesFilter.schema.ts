import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiscountTypeSchema } from '../enums/DiscountType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumDiscountTypeFilterObjectSchema as NestedEnumDiscountTypeFilterObjectSchema } from './NestedEnumDiscountTypeFilter.schema'

const nestedenumdiscounttypewithaggregatesfilterSchema = z.object({
  equals: DiscountTypeSchema.optional(),
  in: DiscountTypeSchema.array().optional(),
  notIn: DiscountTypeSchema.array().optional(),
  not: z.union([DiscountTypeSchema, z.lazy(() => NestedEnumDiscountTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumDiscountTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumDiscountTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumDiscountTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumDiscountTypeWithAggregatesFilter> = nestedenumdiscounttypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumDiscountTypeWithAggregatesFilter>;
export const NestedEnumDiscountTypeWithAggregatesFilterObjectZodSchema = nestedenumdiscounttypewithaggregatesfilterSchema;
