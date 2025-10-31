import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { UserCreateNestedOneWithoutOrdersInputObjectSchema as UserCreateNestedOneWithoutOrdersInputObjectSchema } from './UserCreateNestedOneWithoutOrdersInput.schema';
import { AddressCreateNestedOneWithoutOrdersInputObjectSchema as AddressCreateNestedOneWithoutOrdersInputObjectSchema } from './AddressCreateNestedOneWithoutOrdersInput.schema';
import { OrderItemCreateNestedManyWithoutOrderInputObjectSchema as OrderItemCreateNestedManyWithoutOrderInputObjectSchema } from './OrderItemCreateNestedManyWithoutOrderInput.schema';
import { CouponUsageCreateNestedManyWithoutOrderInputObjectSchema as CouponUsageCreateNestedManyWithoutOrderInputObjectSchema } from './CouponUsageCreateNestedManyWithoutOrderInput.schema';
import { PaymentCreateNestedManyWithoutOrderInputObjectSchema as PaymentCreateNestedManyWithoutOrderInputObjectSchema } from './PaymentCreateNestedManyWithoutOrderInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
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
  user: z.lazy(() => UserCreateNestedOneWithoutOrdersInputObjectSchema),
  address: z.lazy(() => AddressCreateNestedOneWithoutOrdersInputObjectSchema).optional(),
  items: z.lazy(() => OrderItemCreateNestedManyWithoutOrderInputObjectSchema).optional(),
  couponUsages: z.lazy(() => CouponUsageCreateNestedManyWithoutOrderInputObjectSchema).optional(),
  Payment: z.lazy(() => PaymentCreateNestedManyWithoutOrderInputObjectSchema).optional()
}).strict();
export const OrderCreateWithoutGiftCardUsageInputObjectSchema: z.ZodType<Prisma.OrderCreateWithoutGiftCardUsageInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateWithoutGiftCardUsageInput>;
export const OrderCreateWithoutGiftCardUsageInputObjectZodSchema = makeSchema();
