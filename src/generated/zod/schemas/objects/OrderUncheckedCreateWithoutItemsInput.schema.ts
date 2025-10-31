import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { CouponUsageUncheckedCreateNestedManyWithoutOrderInputObjectSchema as CouponUsageUncheckedCreateNestedManyWithoutOrderInputObjectSchema } from './CouponUsageUncheckedCreateNestedManyWithoutOrderInput.schema';
import { PaymentUncheckedCreateNestedManyWithoutOrderInputObjectSchema as PaymentUncheckedCreateNestedManyWithoutOrderInputObjectSchema } from './PaymentUncheckedCreateNestedManyWithoutOrderInput.schema';
import { GiftCardUsageUncheckedCreateNestedManyWithoutOrderInputObjectSchema as GiftCardUsageUncheckedCreateNestedManyWithoutOrderInputObjectSchema } from './GiftCardUsageUncheckedCreateNestedManyWithoutOrderInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  addressId: z.string().optional().nullable(),
  latestPaymentId: z.string().optional().nullable(),
  totalAmount: z.number().optional(),
  status: OrderStatusSchema.optional(),
  paymentStatus: PaymentStatusSchema.optional(),
  currency: z.string().optional(),
  shippingCost: z.number().optional(),
  taxAmount: z.number().optional(),
  discountAmount: z.number().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  couponUsages: z.lazy(() => CouponUsageUncheckedCreateNestedManyWithoutOrderInputObjectSchema).optional(),
  Payment: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutOrderInputObjectSchema).optional(),
  GiftCardUsage: z.lazy(() => GiftCardUsageUncheckedCreateNestedManyWithoutOrderInputObjectSchema).optional()
}).strict();
export const OrderUncheckedCreateWithoutItemsInputObjectSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUncheckedCreateWithoutItemsInput>;
export const OrderUncheckedCreateWithoutItemsInputObjectZodSchema = makeSchema();
