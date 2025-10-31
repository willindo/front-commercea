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
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  address: z.union([z.boolean(), z.lazy(() => AddressArgsObjectSchema)]).optional(),
  items: z.union([z.boolean(), z.lazy(() => OrderItemFindManySchema)]).optional(),
  couponUsages: z.union([z.boolean(), z.lazy(() => CouponUsageFindManySchema)]).optional(),
  Payment: z.union([z.boolean(), z.lazy(() => PaymentFindManySchema)]).optional(),
  GiftCardUsage: z.union([z.boolean(), z.lazy(() => GiftCardUsageFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OrderCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const OrderIncludeObjectSchema: z.ZodType<Prisma.OrderInclude> = makeSchema() as unknown as z.ZodType<Prisma.OrderInclude>;
export const OrderIncludeObjectZodSchema = makeSchema();
