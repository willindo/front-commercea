import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NestedIntWithAggregatesFilterObjectSchema as NestedIntWithAggregatesFilterObjectSchema } from './NestedIntWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedFloatFilterObjectSchema as NestedFloatFilterObjectSchema } from './NestedFloatFilter.schema'

const makeSchema = () => z.object({
  equals: z.number().int().optional(),
  in: z.number().int().array().optional(),
  notIn: z.number().int().array().optional(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedIntFilterObjectSchema).optional()
}).strict();
export const IntWithAggregatesFilterObjectSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.IntWithAggregatesFilter>;
export const IntWithAggregatesFilterObjectZodSchema = makeSchema();
