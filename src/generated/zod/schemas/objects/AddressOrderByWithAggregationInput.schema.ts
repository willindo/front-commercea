import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AddressCountOrderByAggregateInputObjectSchema as AddressCountOrderByAggregateInputObjectSchema } from './AddressCountOrderByAggregateInput.schema';
import { AddressMaxOrderByAggregateInputObjectSchema as AddressMaxOrderByAggregateInputObjectSchema } from './AddressMaxOrderByAggregateInput.schema';
import { AddressMinOrderByAggregateInputObjectSchema as AddressMinOrderByAggregateInputObjectSchema } from './AddressMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  line1: SortOrderSchema.optional(),
  line2: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  city: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  postalCode: SortOrderSchema.optional(),
  country: SortOrderSchema.optional(),
  _count: z.lazy(() => AddressCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AddressMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AddressMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AddressOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AddressOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressOrderByWithAggregationInput>;
export const AddressOrderByWithAggregationInputObjectZodSchema = makeSchema();
