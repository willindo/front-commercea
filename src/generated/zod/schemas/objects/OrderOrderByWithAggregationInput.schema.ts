import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { OrderCountOrderByAggregateInputObjectSchema as OrderCountOrderByAggregateInputObjectSchema } from './OrderCountOrderByAggregateInput.schema';
import { OrderAvgOrderByAggregateInputObjectSchema as OrderAvgOrderByAggregateInputObjectSchema } from './OrderAvgOrderByAggregateInput.schema';
import { OrderMaxOrderByAggregateInputObjectSchema as OrderMaxOrderByAggregateInputObjectSchema } from './OrderMaxOrderByAggregateInput.schema';
import { OrderMinOrderByAggregateInputObjectSchema as OrderMinOrderByAggregateInputObjectSchema } from './OrderMinOrderByAggregateInput.schema';
import { OrderSumOrderByAggregateInputObjectSchema as OrderSumOrderByAggregateInputObjectSchema } from './OrderSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  guestName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  guestEmail: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  guestPhone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  addressId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  latestPaymentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  totalAmount: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  paymentStatus: SortOrderSchema.optional(),
  currency: SortOrderSchema.optional(),
  shippingCost: SortOrderSchema.optional(),
  taxAmount: SortOrderSchema.optional(),
  discountAmount: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => OrderCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => OrderAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => OrderMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => OrderMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => OrderSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const OrderOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.OrderOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderOrderByWithAggregationInput>;
export const OrderOrderByWithAggregationInputObjectZodSchema = makeSchema();
