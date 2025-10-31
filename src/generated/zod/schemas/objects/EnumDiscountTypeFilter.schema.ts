import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiscountTypeSchema } from '../enums/DiscountType.schema';
import { NestedEnumDiscountTypeFilterObjectSchema as NestedEnumDiscountTypeFilterObjectSchema } from './NestedEnumDiscountTypeFilter.schema'

const makeSchema = () => z.object({
  equals: DiscountTypeSchema.optional(),
  in: DiscountTypeSchema.array().optional(),
  notIn: DiscountTypeSchema.array().optional(),
  not: z.union([DiscountTypeSchema, z.lazy(() => NestedEnumDiscountTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumDiscountTypeFilterObjectSchema: z.ZodType<Prisma.EnumDiscountTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDiscountTypeFilter>;
export const EnumDiscountTypeFilterObjectZodSchema = makeSchema();
