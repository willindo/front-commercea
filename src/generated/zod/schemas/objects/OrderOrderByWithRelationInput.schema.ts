import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { AddressOrderByWithRelationInputObjectSchema as AddressOrderByWithRelationInputObjectSchema } from './AddressOrderByWithRelationInput.schema';
import { OrderItemOrderByRelationAggregateInputObjectSchema as OrderItemOrderByRelationAggregateInputObjectSchema } from './OrderItemOrderByRelationAggregateInput.schema';
import { CouponUsageOrderByRelationAggregateInputObjectSchema as CouponUsageOrderByRelationAggregateInputObjectSchema } from './CouponUsageOrderByRelationAggregateInput.schema';
import { PaymentOrderByRelationAggregateInputObjectSchema as PaymentOrderByRelationAggregateInputObjectSchema } from './PaymentOrderByRelationAggregateInput.schema';
import { GiftCardUsageOrderByRelationAggregateInputObjectSchema as GiftCardUsageOrderByRelationAggregateInputObjectSchema } from './GiftCardUsageOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
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
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  address: z.lazy(() => AddressOrderByWithRelationInputObjectSchema).optional(),
  items: z.lazy(() => OrderItemOrderByRelationAggregateInputObjectSchema).optional(),
  couponUsages: z.lazy(() => CouponUsageOrderByRelationAggregateInputObjectSchema).optional(),
  Payment: z.lazy(() => PaymentOrderByRelationAggregateInputObjectSchema).optional(),
  GiftCardUsage: z.lazy(() => GiftCardUsageOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const OrderOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.OrderOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderOrderByWithRelationInput>;
export const OrderOrderByWithRelationInputObjectZodSchema = makeSchema();
