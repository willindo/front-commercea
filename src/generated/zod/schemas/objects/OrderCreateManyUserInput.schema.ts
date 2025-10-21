import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  total: z.number(),
  status: OrderStatusSchema.optional(),
  paymentId: z.string().optional().nullable(),
  paymentStatus: PaymentStatusSchema.optional(),
  address: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const OrderCreateManyUserInputObjectSchema: z.ZodType<Prisma.OrderCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateManyUserInput>;
export const OrderCreateManyUserInputObjectZodSchema = makeSchema();
