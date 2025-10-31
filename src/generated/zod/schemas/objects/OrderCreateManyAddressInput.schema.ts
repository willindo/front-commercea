import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  latestPaymentId: z.string().optional().nullable(),
  totalAmount: z.number().optional(),
  status: OrderStatusSchema.optional(),
  paymentStatus: PaymentStatusSchema.optional(),
  currency: z.string().optional(),
  shippingCost: z.number().optional(),
  taxAmount: z.number().optional(),
  discountAmount: z.number().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const OrderCreateManyAddressInputObjectSchema: z.ZodType<Prisma.OrderCreateManyAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateManyAddressInput>;
export const OrderCreateManyAddressInputObjectZodSchema = makeSchema();
