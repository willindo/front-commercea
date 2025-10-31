import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiscountTypeSchema } from '../enums/DiscountType.schema'

const nestedenumdiscounttypefilterSchema = z.object({
  equals: DiscountTypeSchema.optional(),
  in: DiscountTypeSchema.array().optional(),
  notIn: DiscountTypeSchema.array().optional(),
  not: z.union([DiscountTypeSchema, z.lazy(() => NestedEnumDiscountTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumDiscountTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumDiscountTypeFilter> = nestedenumdiscounttypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumDiscountTypeFilter>;
export const NestedEnumDiscountTypeFilterObjectZodSchema = nestedenumdiscounttypefilterSchema;
