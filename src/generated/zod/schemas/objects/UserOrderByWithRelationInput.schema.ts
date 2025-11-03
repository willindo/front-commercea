import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AddressOrderByRelationAggregateInputObjectSchema as AddressOrderByRelationAggregateInputObjectSchema } from './AddressOrderByRelationAggregateInput.schema';
import { CartOrderByWithRelationInputObjectSchema as CartOrderByWithRelationInputObjectSchema } from './CartOrderByWithRelationInput.schema';
import { OrderOrderByRelationAggregateInputObjectSchema as OrderOrderByRelationAggregateInputObjectSchema } from './OrderOrderByRelationAggregateInput.schema';
import { PaymentOrderByRelationAggregateInputObjectSchema as PaymentOrderByRelationAggregateInputObjectSchema } from './PaymentOrderByRelationAggregateInput.schema';
import { WishlistOrderByRelationAggregateInputObjectSchema as WishlistOrderByRelationAggregateInputObjectSchema } from './WishlistOrderByRelationAggregateInput.schema';
import { ReviewOrderByRelationAggregateInputObjectSchema as ReviewOrderByRelationAggregateInputObjectSchema } from './ReviewOrderByRelationAggregateInput.schema';
import { GiftCardOrderByRelationAggregateInputObjectSchema as GiftCardOrderByRelationAggregateInputObjectSchema } from './GiftCardOrderByRelationAggregateInput.schema';
import { CouponUsageOrderByRelationAggregateInputObjectSchema as CouponUsageOrderByRelationAggregateInputObjectSchema } from './CouponUsageOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  role: SortOrderSchema.optional(),
  isVerified: SortOrderSchema.optional(),
  verificationToken: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  verificationExpiry: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  addresses: z.lazy(() => AddressOrderByRelationAggregateInputObjectSchema).optional(),
  cart: z.lazy(() => CartOrderByWithRelationInputObjectSchema).optional(),
  orders: z.lazy(() => OrderOrderByRelationAggregateInputObjectSchema).optional(),
  payments: z.lazy(() => PaymentOrderByRelationAggregateInputObjectSchema).optional(),
  wishlists: z.lazy(() => WishlistOrderByRelationAggregateInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewOrderByRelationAggregateInputObjectSchema).optional(),
  giftCards: z.lazy(() => GiftCardOrderByRelationAggregateInputObjectSchema).optional(),
  couponUsages: z.lazy(() => CouponUsageOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
