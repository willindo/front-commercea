import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressFindManySchema as AddressFindManySchema } from '../findManyAddress.schema';
import { CartArgsObjectSchema as CartArgsObjectSchema } from './CartArgs.schema';
import { OrderFindManySchema as OrderFindManySchema } from '../findManyOrder.schema';
import { PaymentFindManySchema as PaymentFindManySchema } from '../findManyPayment.schema';
import { WishlistFindManySchema as WishlistFindManySchema } from '../findManyWishlist.schema';
import { ReviewFindManySchema as ReviewFindManySchema } from '../findManyReview.schema';
import { GiftCardFindManySchema as GiftCardFindManySchema } from '../findManyGiftCard.schema';
import { CouponUsageFindManySchema as CouponUsageFindManySchema } from '../findManyCouponUsage.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  name: z.boolean().optional(),
  phone: z.boolean().optional(),
  role: z.boolean().optional(),
  isVerified: z.boolean().optional(),
  verificationToken: z.boolean().optional(),
  verificationExpiry: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  addresses: z.union([z.boolean(), z.lazy(() => AddressFindManySchema)]).optional(),
  cart: z.union([z.boolean(), z.lazy(() => CartArgsObjectSchema)]).optional(),
  orders: z.union([z.boolean(), z.lazy(() => OrderFindManySchema)]).optional(),
  payments: z.union([z.boolean(), z.lazy(() => PaymentFindManySchema)]).optional(),
  wishlists: z.union([z.boolean(), z.lazy(() => WishlistFindManySchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => ReviewFindManySchema)]).optional(),
  giftCards: z.union([z.boolean(), z.lazy(() => GiftCardFindManySchema)]).optional(),
  couponUsages: z.union([z.boolean(), z.lazy(() => CouponUsageFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
