import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  line1: SortOrderSchema.optional(),
  line2: SortOrderSchema.optional(),
  city: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  postalCode: SortOrderSchema.optional(),
  country: SortOrderSchema.optional()
}).strict();
export const AddressMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AddressMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressMaxOrderByAggregateInput>;
export const AddressMaxOrderByAggregateInputObjectZodSchema = makeSchema();
