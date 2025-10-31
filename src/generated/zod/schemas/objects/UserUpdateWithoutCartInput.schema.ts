import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumRoleFieldUpdateOperationsInputObjectSchema as EnumRoleFieldUpdateOperationsInputObjectSchema } from './EnumRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AddressUpdateManyWithoutUserNestedInputObjectSchema as AddressUpdateManyWithoutUserNestedInputObjectSchema } from './AddressUpdateManyWithoutUserNestedInput.schema';
import { OrderUpdateManyWithoutUserNestedInputObjectSchema as OrderUpdateManyWithoutUserNestedInputObjectSchema } from './OrderUpdateManyWithoutUserNestedInput.schema';
import { PaymentUpdateManyWithoutUserNestedInputObjectSchema as PaymentUpdateManyWithoutUserNestedInputObjectSchema } from './PaymentUpdateManyWithoutUserNestedInput.schema';
import { WishlistUpdateManyWithoutUserNestedInputObjectSchema as WishlistUpdateManyWithoutUserNestedInputObjectSchema } from './WishlistUpdateManyWithoutUserNestedInput.schema';
import { ReviewUpdateManyWithoutUserNestedInputObjectSchema as ReviewUpdateManyWithoutUserNestedInputObjectSchema } from './ReviewUpdateManyWithoutUserNestedInput.schema';
import { GiftCardUpdateManyWithoutUserNestedInputObjectSchema as GiftCardUpdateManyWithoutUserNestedInputObjectSchema } from './GiftCardUpdateManyWithoutUserNestedInput.schema';
import { CouponUsageUpdateManyWithoutUserNestedInputObjectSchema as CouponUsageUpdateManyWithoutUserNestedInputObjectSchema } from './CouponUsageUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  role: z.union([RoleSchema, z.lazy(() => EnumRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  addresses: z.lazy(() => AddressUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  wishlists: z.lazy(() => WishlistUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  giftCards: z.lazy(() => GiftCardUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  couponUsages: z.lazy(() => CouponUsageUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutCartInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutCartInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutCartInput>;
export const UserUpdateWithoutCartInputObjectZodSchema = makeSchema();
