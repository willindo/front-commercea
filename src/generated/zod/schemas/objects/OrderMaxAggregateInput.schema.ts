import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  guestName: z.literal(true).optional(),
  guestEmail: z.literal(true).optional(),
  guestPhone: z.literal(true).optional(),
  addressId: z.literal(true).optional(),
  latestPaymentId: z.literal(true).optional(),
  totalAmount: z.literal(true).optional(),
  status: z.literal(true).optional(),
  paymentStatus: z.literal(true).optional(),
  currency: z.literal(true).optional(),
  shippingCost: z.literal(true).optional(),
  taxAmount: z.literal(true).optional(),
  discountAmount: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const OrderMaxAggregateInputObjectSchema: z.ZodType<Prisma.OrderMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrderMaxAggregateInputType>;
export const OrderMaxAggregateInputObjectZodSchema = makeSchema();
