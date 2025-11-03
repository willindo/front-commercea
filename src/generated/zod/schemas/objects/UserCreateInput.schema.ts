import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { AddressCreateNestedManyWithoutUserInputObjectSchema as AddressCreateNestedManyWithoutUserInputObjectSchema } from './AddressCreateNestedManyWithoutUserInput.schema';
import { CartCreateNestedOneWithoutUserInputObjectSchema as CartCreateNestedOneWithoutUserInputObjectSchema } from './CartCreateNestedOneWithoutUserInput.schema';
import { OrderCreateNestedManyWithoutUserInputObjectSchema as OrderCreateNestedManyWithoutUserInputObjectSchema } from './OrderCreateNestedManyWithoutUserInput.schema';
import { PaymentCreateNestedManyWithoutUserInputObjectSchema as PaymentCreateNestedManyWithoutUserInputObjectSchema } from './PaymentCreateNestedManyWithoutUserInput.schema';
import { WishlistCreateNestedManyWithoutUserInputObjectSchema as WishlistCreateNestedManyWithoutUserInputObjectSchema } from './WishlistCreateNestedManyWithoutUserInput.schema';
import { ReviewCreateNestedManyWithoutUserInputObjectSchema as ReviewCreateNestedManyWithoutUserInputObjectSchema } from './ReviewCreateNestedManyWithoutUserInput.schema';
import { GiftCardCreateNestedManyWithoutUserInputObjectSchema as GiftCardCreateNestedManyWithoutUserInputObjectSchema } from './GiftCardCreateNestedManyWithoutUserInput.schema';
import { CouponUsageCreateNestedManyWithoutUserInputObjectSchema as CouponUsageCreateNestedManyWithoutUserInputObjectSchema } from './CouponUsageCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  password: z.string(),
  name: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  role: RoleSchema.optional(),
  isVerified: z.boolean().optional(),
  verificationToken: z.string().optional().nullable(),
  verificationExpiry: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  addresses: z.lazy(() => AddressCreateNestedManyWithoutUserInputObjectSchema),
  cart: z.lazy(() => CartCreateNestedOneWithoutUserInputObjectSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutUserInputObjectSchema),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutUserInputObjectSchema),
  wishlists: z.lazy(() => WishlistCreateNestedManyWithoutUserInputObjectSchema),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutUserInputObjectSchema),
  giftCards: z.lazy(() => GiftCardCreateNestedManyWithoutUserInputObjectSchema),
  couponUsages: z.lazy(() => CouponUsageCreateNestedManyWithoutUserInputObjectSchema)
}).strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
