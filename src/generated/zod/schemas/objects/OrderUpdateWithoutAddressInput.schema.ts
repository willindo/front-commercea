import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { EnumOrderStatusFieldUpdateOperationsInputObjectSchema as EnumOrderStatusFieldUpdateOperationsInputObjectSchema } from './EnumOrderStatusFieldUpdateOperationsInput.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { EnumPaymentStatusFieldUpdateOperationsInputObjectSchema as EnumPaymentStatusFieldUpdateOperationsInputObjectSchema } from './EnumPaymentStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutOrdersNestedInputObjectSchema as UserUpdateOneRequiredWithoutOrdersNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutOrdersNestedInput.schema';
import { OrderItemUpdateManyWithoutOrderNestedInputObjectSchema as OrderItemUpdateManyWithoutOrderNestedInputObjectSchema } from './OrderItemUpdateManyWithoutOrderNestedInput.schema';
import { CouponUsageUpdateManyWithoutOrderNestedInputObjectSchema as CouponUsageUpdateManyWithoutOrderNestedInputObjectSchema } from './CouponUsageUpdateManyWithoutOrderNestedInput.schema';
import { PaymentUpdateManyWithoutOrderNestedInputObjectSchema as PaymentUpdateManyWithoutOrderNestedInputObjectSchema } from './PaymentUpdateManyWithoutOrderNestedInput.schema';
import { GiftCardUsageUpdateManyWithoutOrderNestedInputObjectSchema as GiftCardUsageUpdateManyWithoutOrderNestedInputObjectSchema } from './GiftCardUsageUpdateManyWithoutOrderNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  latestPaymentId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  totalAmount: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([OrderStatusSchema, z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  paymentStatus: z.union([PaymentStatusSchema, z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  currency: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  shippingCost: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  taxAmount: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  discountAmount: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutOrdersNestedInputObjectSchema).optional(),
  items: z.lazy(() => OrderItemUpdateManyWithoutOrderNestedInputObjectSchema).optional(),
  couponUsages: z.lazy(() => CouponUsageUpdateManyWithoutOrderNestedInputObjectSchema).optional(),
  Payment: z.lazy(() => PaymentUpdateManyWithoutOrderNestedInputObjectSchema).optional(),
  GiftCardUsage: z.lazy(() => GiftCardUsageUpdateManyWithoutOrderNestedInputObjectSchema).optional()
}).strict();
export const OrderUpdateWithoutAddressInputObjectSchema: z.ZodType<Prisma.OrderUpdateWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpdateWithoutAddressInput>;
export const OrderUpdateWithoutAddressInputObjectZodSchema = makeSchema();
