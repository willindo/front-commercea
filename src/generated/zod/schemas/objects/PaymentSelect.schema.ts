import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  orderId: z.boolean().optional(),
  razorpayOrderId: z.boolean().optional(),
  razorpayPaymentId: z.boolean().optional(),
  signature: z.boolean().optional(),
  amount: z.boolean().optional(),
  currency: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const PaymentSelectObjectSchema: z.ZodType<Prisma.PaymentSelect> = makeSchema() as unknown as z.ZodType<Prisma.PaymentSelect>;
export const PaymentSelectObjectZodSchema = makeSchema();
