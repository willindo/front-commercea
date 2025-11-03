import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { OrderItemUncheckedCreateNestedManyWithoutOrderInputObjectSchema as OrderItemUncheckedCreateNestedManyWithoutOrderInputObjectSchema } from './OrderItemUncheckedCreateNestedManyWithoutOrderInput.schema';
import { CouponUsageUncheckedCreateNestedManyWithoutOrderInputObjectSchema as CouponUsageUncheckedCreateNestedManyWithoutOrderInputObjectSchema } from './CouponUsageUncheckedCreateNestedManyWithoutOrderInput.schema';
import { GiftCardUsageUncheckedCreateNestedManyWithoutOrderInputObjectSchema as GiftCardUsageUncheckedCreateNestedManyWithoutOrderInputObjectSchema } from './GiftCardUsageUncheckedCreateNestedManyWithoutOrderInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string().optional().nullable(),
  guestName: z.string().optional().nullable(),
  guestEmail: z.string().optional().nullable(),
  guestPhone: z.string().optional().nullable(),
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
  items: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutOrderInputObjectSchema).optional(),
  couponUsages: z.lazy(() => CouponUsageUncheckedCreateNestedManyWithoutOrderInputObjectSchema).optional(),
  GiftCardUsage: z.lazy(() => GiftCardUsageUncheckedCreateNestedManyWithoutOrderInputObjectSchema).optional()
}).strict();
export const OrderUncheckedCreateWithoutPaymentInputObjectSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutPaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUncheckedCreateWithoutPaymentInput>;
export const OrderUncheckedCreateWithoutPaymentInputObjectZodSchema = makeSchema();
