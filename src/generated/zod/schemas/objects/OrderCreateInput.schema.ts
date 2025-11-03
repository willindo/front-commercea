import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { UserCreateNestedOneWithoutOrdersInputObjectSchema as UserCreateNestedOneWithoutOrdersInputObjectSchema } from './UserCreateNestedOneWithoutOrdersInput.schema';
import { AddressCreateNestedOneWithoutOrdersInputObjectSchema as AddressCreateNestedOneWithoutOrdersInputObjectSchema } from './AddressCreateNestedOneWithoutOrdersInput.schema';
import { OrderItemCreateNestedManyWithoutOrderInputObjectSchema as OrderItemCreateNestedManyWithoutOrderInputObjectSchema } from './OrderItemCreateNestedManyWithoutOrderInput.schema';
import { CouponUsageCreateNestedManyWithoutOrderInputObjectSchema as CouponUsageCreateNestedManyWithoutOrderInputObjectSchema } from './CouponUsageCreateNestedManyWithoutOrderInput.schema';
import { PaymentCreateNestedManyWithoutOrderInputObjectSchema as PaymentCreateNestedManyWithoutOrderInputObjectSchema } from './PaymentCreateNestedManyWithoutOrderInput.schema';
import { GiftCardUsageCreateNestedManyWithoutOrderInputObjectSchema as GiftCardUsageCreateNestedManyWithoutOrderInputObjectSchema } from './GiftCardUsageCreateNestedManyWithoutOrderInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  guestName: z.string().optional().nullable(),
  guestEmail: z.string().optional().nullable(),
  guestPhone: z.string().optional().nullable(),
  latestPaymentId: z.string().optional().nullable(),
  totalAmount: z.number().optional(),
  status: OrderStatusSchema.optional(),
  paymentStatus: PaymentStatusSchema.optional(),
  currency: z.string().optional(),
  shippingCost: z.number().optional(),
  taxAmount: z.number().optional(),
  discountAmount: z.number().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutOrdersInputObjectSchema).optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutOrdersInputObjectSchema).optional(),
  items: z.lazy(() => OrderItemCreateNestedManyWithoutOrderInputObjectSchema),
  couponUsages: z.lazy(() => CouponUsageCreateNestedManyWithoutOrderInputObjectSchema),
  Payment: z.lazy(() => PaymentCreateNestedManyWithoutOrderInputObjectSchema),
  GiftCardUsage: z.lazy(() => GiftCardUsageCreateNestedManyWithoutOrderInputObjectSchema)
}).strict();
export const OrderCreateInputObjectSchema: z.ZodType<Prisma.OrderCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateInput>;
export const OrderCreateInputObjectZodSchema = makeSchema();
