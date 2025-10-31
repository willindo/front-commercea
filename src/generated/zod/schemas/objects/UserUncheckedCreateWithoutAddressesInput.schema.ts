import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { CartUncheckedCreateNestedOneWithoutUserInputObjectSchema as CartUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './CartUncheckedCreateNestedOneWithoutUserInput.schema';
import { OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema as OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutUserInput.schema';
import { PaymentUncheckedCreateNestedManyWithoutUserInputObjectSchema as PaymentUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PaymentUncheckedCreateNestedManyWithoutUserInput.schema';
import { WishlistUncheckedCreateNestedManyWithoutUserInputObjectSchema as WishlistUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './WishlistUncheckedCreateNestedManyWithoutUserInput.schema';
import { ReviewUncheckedCreateNestedManyWithoutUserInputObjectSchema as ReviewUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutUserInput.schema';
import { GiftCardUncheckedCreateNestedManyWithoutUserInputObjectSchema as GiftCardUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './GiftCardUncheckedCreateNestedManyWithoutUserInput.schema';
import { CouponUsageUncheckedCreateNestedManyWithoutUserInputObjectSchema as CouponUsageUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './CouponUsageUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  password: z.string(),
  name: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  role: RoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cart: z.lazy(() => CartUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  wishlists: z.lazy(() => WishlistUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  giftCards: z.lazy(() => GiftCardUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  couponUsages: z.lazy(() => CouponUsageUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutAddressesInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutAddressesInput>;
export const UserUncheckedCreateWithoutAddressesInputObjectZodSchema = makeSchema();
