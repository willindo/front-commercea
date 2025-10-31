import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderCreateWithoutPaymentInputObjectSchema as OrderCreateWithoutPaymentInputObjectSchema } from './OrderCreateWithoutPaymentInput.schema';
import { OrderUncheckedCreateWithoutPaymentInputObjectSchema as OrderUncheckedCreateWithoutPaymentInputObjectSchema } from './OrderUncheckedCreateWithoutPaymentInput.schema';
import { OrderCreateOrConnectWithoutPaymentInputObjectSchema as OrderCreateOrConnectWithoutPaymentInputObjectSchema } from './OrderCreateOrConnectWithoutPaymentInput.schema';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutPaymentInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutPaymentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutPaymentInputObjectSchema).optional(),
  connect: z.lazy(() => OrderWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrderCreateNestedOneWithoutPaymentInputObjectSchema: z.ZodType<Prisma.OrderCreateNestedOneWithoutPaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateNestedOneWithoutPaymentInput>;
export const OrderCreateNestedOneWithoutPaymentInputObjectZodSchema = makeSchema();
