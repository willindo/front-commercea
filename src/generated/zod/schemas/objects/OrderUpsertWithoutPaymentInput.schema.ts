import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderUpdateWithoutPaymentInputObjectSchema as OrderUpdateWithoutPaymentInputObjectSchema } from './OrderUpdateWithoutPaymentInput.schema';
import { OrderUncheckedUpdateWithoutPaymentInputObjectSchema as OrderUncheckedUpdateWithoutPaymentInputObjectSchema } from './OrderUncheckedUpdateWithoutPaymentInput.schema';
import { OrderCreateWithoutPaymentInputObjectSchema as OrderCreateWithoutPaymentInputObjectSchema } from './OrderCreateWithoutPaymentInput.schema';
import { OrderUncheckedCreateWithoutPaymentInputObjectSchema as OrderUncheckedCreateWithoutPaymentInputObjectSchema } from './OrderUncheckedCreateWithoutPaymentInput.schema';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrderUpdateWithoutPaymentInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutPaymentInputObjectSchema)]),
  create: z.union([z.lazy(() => OrderCreateWithoutPaymentInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutPaymentInputObjectSchema)]),
  where: z.lazy(() => OrderWhereInputObjectSchema).optional()
}).strict();
export const OrderUpsertWithoutPaymentInputObjectSchema: z.ZodType<Prisma.OrderUpsertWithoutPaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpsertWithoutPaymentInput>;
export const OrderUpsertWithoutPaymentInputObjectZodSchema = makeSchema();
