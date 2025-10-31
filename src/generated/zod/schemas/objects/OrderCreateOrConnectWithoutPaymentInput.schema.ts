import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderCreateWithoutPaymentInputObjectSchema as OrderCreateWithoutPaymentInputObjectSchema } from './OrderCreateWithoutPaymentInput.schema';
import { OrderUncheckedCreateWithoutPaymentInputObjectSchema as OrderUncheckedCreateWithoutPaymentInputObjectSchema } from './OrderUncheckedCreateWithoutPaymentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrderCreateWithoutPaymentInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutPaymentInputObjectSchema)])
}).strict();
export const OrderCreateOrConnectWithoutPaymentInputObjectSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutPaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateOrConnectWithoutPaymentInput>;
export const OrderCreateOrConnectWithoutPaymentInputObjectZodSchema = makeSchema();
