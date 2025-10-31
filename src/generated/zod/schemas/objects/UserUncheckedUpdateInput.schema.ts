import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumRoleFieldUpdateOperationsInputObjectSchema as EnumRoleFieldUpdateOperationsInputObjectSchema } from './EnumRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AddressUncheckedUpdateManyWithoutUserNestedInputObjectSchema as AddressUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AddressUncheckedUpdateManyWithoutUserNestedInput.schema';
import { CartUncheckedUpdateOneWithoutUserNestedInputObjectSchema as CartUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './CartUncheckedUpdateOneWithoutUserNestedInput.schema';
import { OrderUncheckedUpdateManyWithoutUserNestedInputObjectSchema as OrderUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './OrderUncheckedUpdateManyWithoutUserNestedInput.schema';
import { PaymentUncheckedUpdateManyWithoutUserNestedInputObjectSchema as PaymentUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './PaymentUncheckedUpdateManyWithoutUserNestedInput.schema';
import { WishlistUncheckedUpdateManyWithoutUserNestedInputObjectSchema as WishlistUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './WishlistUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ReviewUncheckedUpdateManyWithoutUserNestedInputObjectSchema as ReviewUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutUserNestedInput.schema';
import { GiftCardUncheckedUpdateManyWithoutUserNestedInputObjectSchema as GiftCardUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './GiftCardUncheckedUpdateManyWithoutUserNestedInput.schema';
import { CouponUsageUncheckedUpdateManyWithoutUserNestedInputObjectSchema as CouponUsageUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './CouponUsageUncheckedUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  role: z.union([RoleSchema, z.lazy(() => EnumRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  addresses: z.lazy(() => AddressUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  cart: z.lazy(() => CartUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  wishlists: z.lazy(() => WishlistUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  giftCards: z.lazy(() => GiftCardUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  couponUsages: z.lazy(() => CouponUsageUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateInput>;
export const UserUncheckedUpdateInputObjectZodSchema = makeSchema();
