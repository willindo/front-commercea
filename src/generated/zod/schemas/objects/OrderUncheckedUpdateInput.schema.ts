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
import { OrderItemUncheckedUpdateManyWithoutOrderNestedInputObjectSchema as OrderItemUncheckedUpdateManyWithoutOrderNestedInputObjectSchema } from './OrderItemUncheckedUpdateManyWithoutOrderNestedInput.schema';
import { CouponUsageUncheckedUpdateManyWithoutOrderNestedInputObjectSchema as CouponUsageUncheckedUpdateManyWithoutOrderNestedInputObjectSchema } from './CouponUsageUncheckedUpdateManyWithoutOrderNestedInput.schema';
import { PaymentUncheckedUpdateManyWithoutOrderNestedInputObjectSchema as PaymentUncheckedUpdateManyWithoutOrderNestedInputObjectSchema } from './PaymentUncheckedUpdateManyWithoutOrderNestedInput.schema';
import { GiftCardUsageUncheckedUpdateManyWithoutOrderNestedInputObjectSchema as GiftCardUsageUncheckedUpdateManyWithoutOrderNestedInputObjectSchema } from './GiftCardUsageUncheckedUpdateManyWithoutOrderNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  addressId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
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
  items: z.lazy(() => OrderItemUncheckedUpdateManyWithoutOrderNestedInputObjectSchema).optional(),
  couponUsages: z.lazy(() => CouponUsageUncheckedUpdateManyWithoutOrderNestedInputObjectSchema).optional(),
  Payment: z.lazy(() => PaymentUncheckedUpdateManyWithoutOrderNestedInputObjectSchema).optional(),
  GiftCardUsage: z.lazy(() => GiftCardUsageUncheckedUpdateManyWithoutOrderNestedInputObjectSchema).optional()
}).strict();
export const OrderUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.OrderUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUncheckedUpdateInput>;
export const OrderUncheckedUpdateInputObjectZodSchema = makeSchema();
