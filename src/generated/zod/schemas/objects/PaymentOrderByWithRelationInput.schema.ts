import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { OrderOrderByWithRelationInputObjectSchema as OrderOrderByWithRelationInputObjectSchema } from './OrderOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  orderId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  signature: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  amount: SortOrderSchema.optional(),
  currency: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  razorpayOrderId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  razorpayPaymentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  order: z.lazy(() => OrderOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const PaymentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PaymentOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentOrderByWithRelationInput>;
export const PaymentOrderByWithRelationInputObjectZodSchema = makeSchema();
