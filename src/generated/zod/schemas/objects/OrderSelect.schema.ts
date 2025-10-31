import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { AddressArgsObjectSchema as AddressArgsObjectSchema } from './AddressArgs.schema';
import { OrderItemFindManySchema as OrderItemFindManySchema } from '../findManyOrderItem.schema';
import { CouponUsageFindManySchema as CouponUsageFindManySchema } from '../findManyCouponUsage.schema';
import { PaymentFindManySchema as PaymentFindManySchema } from '../findManyPayment.schema';
import { GiftCardUsageFindManySchema as GiftCardUsageFindManySchema } from '../findManyGiftCardUsage.schema';
import { OrderCountOutputTypeArgsObjectSchema as OrderCountOutputTypeArgsObjectSchema } from './OrderCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  userId: z.boolean().optional(),
  address: z.union([z.boolean(), z.lazy(() => AddressArgsObjectSchema)]).optional(),
  addressId: z.boolean().optional(),
  latestPaymentId: z.boolean().optional(),
  items: z.union([z.boolean(), z.lazy(() => OrderItemFindManySchema)]).optional(),
  totalAmount: z.boolean().optional(),
  status: z.boolean().optional(),
  paymentStatus: z.boolean().optional(),
  currency: z.boolean().optional(),
  shippingCost: z.boolean().optional(),
  taxAmount: z.boolean().optional(),
  discountAmount: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  couponUsages: z.union([z.boolean(), z.lazy(() => CouponUsageFindManySchema)]).optional(),
  Payment: z.union([z.boolean(), z.lazy(() => PaymentFindManySchema)]).optional(),
  GiftCardUsage: z.union([z.boolean(), z.lazy(() => GiftCardUsageFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OrderCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const OrderSelectObjectSchema: z.ZodType<Prisma.OrderSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrderSelect>;
export const OrderSelectObjectZodSchema = makeSchema();
