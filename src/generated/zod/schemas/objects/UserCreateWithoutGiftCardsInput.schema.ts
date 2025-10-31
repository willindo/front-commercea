import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { AddressCreateNestedManyWithoutUserInputObjectSchema as AddressCreateNestedManyWithoutUserInputObjectSchema } from './AddressCreateNestedManyWithoutUserInput.schema';
import { CartCreateNestedOneWithoutUserInputObjectSchema as CartCreateNestedOneWithoutUserInputObjectSchema } from './CartCreateNestedOneWithoutUserInput.schema';
import { OrderCreateNestedManyWithoutUserInputObjectSchema as OrderCreateNestedManyWithoutUserInputObjectSchema } from './OrderCreateNestedManyWithoutUserInput.schema';
import { PaymentCreateNestedManyWithoutUserInputObjectSchema as PaymentCreateNestedManyWithoutUserInputObjectSchema } from './PaymentCreateNestedManyWithoutUserInput.schema';
import { WishlistCreateNestedManyWithoutUserInputObjectSchema as WishlistCreateNestedManyWithoutUserInputObjectSchema } from './WishlistCreateNestedManyWithoutUserInput.schema';
import { ReviewCreateNestedManyWithoutUserInputObjectSchema as ReviewCreateNestedManyWithoutUserInputObjectSchema } from './ReviewCreateNestedManyWithoutUserInput.schema';
import { CouponUsageCreateNestedManyWithoutUserInputObjectSchema as CouponUsageCreateNestedManyWithoutUserInputObjectSchema } from './CouponUsageCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  password: z.string(),
  name: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  role: RoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  addresses: z.lazy(() => AddressCreateNestedManyWithoutUserInputObjectSchema).optional(),
  cart: z.lazy(() => CartCreateNestedOneWithoutUserInputObjectSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutUserInputObjectSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutUserInputObjectSchema).optional(),
  wishlists: z.lazy(() => WishlistCreateNestedManyWithoutUserInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutUserInputObjectSchema).optional(),
  couponUsages: z.lazy(() => CouponUsageCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutGiftCardsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutGiftCardsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutGiftCardsInput>;
export const UserCreateWithoutGiftCardsInputObjectZodSchema = makeSchema();
