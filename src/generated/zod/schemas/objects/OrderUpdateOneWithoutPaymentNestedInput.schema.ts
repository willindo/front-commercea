import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderCreateWithoutPaymentInputObjectSchema as OrderCreateWithoutPaymentInputObjectSchema } from './OrderCreateWithoutPaymentInput.schema';
import { OrderUncheckedCreateWithoutPaymentInputObjectSchema as OrderUncheckedCreateWithoutPaymentInputObjectSchema } from './OrderUncheckedCreateWithoutPaymentInput.schema';
import { OrderCreateOrConnectWithoutPaymentInputObjectSchema as OrderCreateOrConnectWithoutPaymentInputObjectSchema } from './OrderCreateOrConnectWithoutPaymentInput.schema';
import { OrderUpsertWithoutPaymentInputObjectSchema as OrderUpsertWithoutPaymentInputObjectSchema } from './OrderUpsertWithoutPaymentInput.schema';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateToOneWithWhereWithoutPaymentInputObjectSchema as OrderUpdateToOneWithWhereWithoutPaymentInputObjectSchema } from './OrderUpdateToOneWithWhereWithoutPaymentInput.schema';
import { OrderUpdateWithoutPaymentInputObjectSchema as OrderUpdateWithoutPaymentInputObjectSchema } from './OrderUpdateWithoutPaymentInput.schema';
import { OrderUncheckedUpdateWithoutPaymentInputObjectSchema as OrderUncheckedUpdateWithoutPaymentInputObjectSchema } from './OrderUncheckedUpdateWithoutPaymentInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutPaymentInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutPaymentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutPaymentInputObjectSchema).optional(),
  upsert: z.lazy(() => OrderUpsertWithoutPaymentInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => OrderWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => OrderWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => OrderWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrderUpdateToOneWithWhereWithoutPaymentInputObjectSchema), z.lazy(() => OrderUpdateWithoutPaymentInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutPaymentInputObjectSchema)]).optional()
}).strict();
export const OrderUpdateOneWithoutPaymentNestedInputObjectSchema: z.ZodType<Prisma.OrderUpdateOneWithoutPaymentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpdateOneWithoutPaymentNestedInput>;
export const OrderUpdateOneWithoutPaymentNestedInputObjectZodSchema = makeSchema();
