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
import { AddressUpdateOneWithoutOrdersNestedInputObjectSchema as AddressUpdateOneWithoutOrdersNestedInputObjectSchema } from './AddressUpdateOneWithoutOrdersNestedInput.schema';
import { OrderItemUpdateManyWithoutOrderNestedInputObjectSchema as OrderItemUpdateManyWithoutOrderNestedInputObjectSchema } from './OrderItemUpdateManyWithoutOrderNestedInput.schema';
import { CouponUsageUpdateManyWithoutOrderNestedInputObjectSchema as CouponUsageUpdateManyWithoutOrderNestedInputObjectSchema } from './CouponUsageUpdateManyWithoutOrderNestedInput.schema';
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
  address: z.lazy(() => AddressUpdateOneWithoutOrdersNestedInputObjectSchema).optional(),
  items: z.lazy(() => OrderItemUpdateManyWithoutOrderNestedInputObjectSchema).optional(),
  couponUsages: z.lazy(() => CouponUsageUpdateManyWithoutOrderNestedInputObjectSchema).optional(),
  GiftCardUsage: z.lazy(() => GiftCardUsageUpdateManyWithoutOrderNestedInputObjectSchema).optional()
}).strict();
export const OrderUpdateWithoutPaymentInputObjectSchema: z.ZodType<Prisma.OrderUpdateWithoutPaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpdateWithoutPaymentInput>;
export const OrderUpdateWithoutPaymentInputObjectZodSchema = makeSchema();
