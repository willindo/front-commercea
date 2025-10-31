import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { OrderOrderByRelationAggregateInputObjectSchema as OrderOrderByRelationAggregateInputObjectSchema } from './OrderOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  line1: SortOrderSchema.optional(),
  line2: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  city: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  postalCode: SortOrderSchema.optional(),
  country: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  orders: z.lazy(() => OrderOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const AddressOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AddressOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressOrderByWithRelationInput>;
export const AddressOrderByWithRelationInputObjectZodSchema = makeSchema();
