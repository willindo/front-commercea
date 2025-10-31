import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema';
import { OrderUpdateWithoutPaymentInputObjectSchema as OrderUpdateWithoutPaymentInputObjectSchema } from './OrderUpdateWithoutPaymentInput.schema';
import { OrderUncheckedUpdateWithoutPaymentInputObjectSchema as OrderUncheckedUpdateWithoutPaymentInputObjectSchema } from './OrderUncheckedUpdateWithoutPaymentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrderUpdateWithoutPaymentInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutPaymentInputObjectSchema)])
}).strict();
export const OrderUpdateToOneWithWhereWithoutPaymentInputObjectSchema: z.ZodType<Prisma.OrderUpdateToOneWithWhereWithoutPaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpdateToOneWithWhereWithoutPaymentInput>;
export const OrderUpdateToOneWithWhereWithoutPaymentInputObjectZodSchema = makeSchema();
