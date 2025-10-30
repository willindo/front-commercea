import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderCreateWithoutPaymentsInputObjectSchema as OrderCreateWithoutPaymentsInputObjectSchema } from './OrderCreateWithoutPaymentsInput.schema';
import { OrderUncheckedCreateWithoutPaymentsInputObjectSchema as OrderUncheckedCreateWithoutPaymentsInputObjectSchema } from './OrderUncheckedCreateWithoutPaymentsInput.schema';
import { OrderCreateOrConnectWithoutPaymentsInputObjectSchema as OrderCreateOrConnectWithoutPaymentsInputObjectSchema } from './OrderCreateOrConnectWithoutPaymentsInput.schema';
import { OrderUpsertWithoutPaymentsInputObjectSchema as OrderUpsertWithoutPaymentsInputObjectSchema } from './OrderUpsertWithoutPaymentsInput.schema';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateToOneWithWhereWithoutPaymentsInputObjectSchema as OrderUpdateToOneWithWhereWithoutPaymentsInputObjectSchema } from './OrderUpdateToOneWithWhereWithoutPaymentsInput.schema';
import { OrderUpdateWithoutPaymentsInputObjectSchema as OrderUpdateWithoutPaymentsInputObjectSchema } from './OrderUpdateWithoutPaymentsInput.schema';
import { OrderUncheckedUpdateWithoutPaymentsInputObjectSchema as OrderUncheckedUpdateWithoutPaymentsInputObjectSchema } from './OrderUncheckedUpdateWithoutPaymentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutPaymentsInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutPaymentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutPaymentsInputObjectSchema).optional(),
  upsert: z.lazy(() => OrderUpsertWithoutPaymentsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => OrderWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => OrderWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => OrderWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrderUpdateToOneWithWhereWithoutPaymentsInputObjectSchema), z.lazy(() => OrderUpdateWithoutPaymentsInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutPaymentsInputObjectSchema)]).optional()
}).strict();
export const OrderUpdateOneWithoutPaymentsNestedInputObjectSchema: z.ZodType<Prisma.OrderUpdateOneWithoutPaymentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpdateOneWithoutPaymentsNestedInput>;
export const OrderUpdateOneWithoutPaymentsNestedInputObjectZodSchema = makeSchema();
