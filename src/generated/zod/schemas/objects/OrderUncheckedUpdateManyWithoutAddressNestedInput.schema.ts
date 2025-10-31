import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderCreateWithoutAddressInputObjectSchema as OrderCreateWithoutAddressInputObjectSchema } from './OrderCreateWithoutAddressInput.schema';
import { OrderUncheckedCreateWithoutAddressInputObjectSchema as OrderUncheckedCreateWithoutAddressInputObjectSchema } from './OrderUncheckedCreateWithoutAddressInput.schema';
import { OrderCreateOrConnectWithoutAddressInputObjectSchema as OrderCreateOrConnectWithoutAddressInputObjectSchema } from './OrderCreateOrConnectWithoutAddressInput.schema';
import { OrderUpsertWithWhereUniqueWithoutAddressInputObjectSchema as OrderUpsertWithWhereUniqueWithoutAddressInputObjectSchema } from './OrderUpsertWithWhereUniqueWithoutAddressInput.schema';
import { OrderCreateManyAddressInputEnvelopeObjectSchema as OrderCreateManyAddressInputEnvelopeObjectSchema } from './OrderCreateManyAddressInputEnvelope.schema';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithWhereUniqueWithoutAddressInputObjectSchema as OrderUpdateWithWhereUniqueWithoutAddressInputObjectSchema } from './OrderUpdateWithWhereUniqueWithoutAddressInput.schema';
import { OrderUpdateManyWithWhereWithoutAddressInputObjectSchema as OrderUpdateManyWithWhereWithoutAddressInputObjectSchema } from './OrderUpdateManyWithWhereWithoutAddressInput.schema';
import { OrderScalarWhereInputObjectSchema as OrderScalarWhereInputObjectSchema } from './OrderScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutAddressInputObjectSchema), z.lazy(() => OrderCreateWithoutAddressInputObjectSchema).array(), z.lazy(() => OrderUncheckedCreateWithoutAddressInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutAddressInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrderCreateOrConnectWithoutAddressInputObjectSchema), z.lazy(() => OrderCreateOrConnectWithoutAddressInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrderUpsertWithWhereUniqueWithoutAddressInputObjectSchema), z.lazy(() => OrderUpsertWithWhereUniqueWithoutAddressInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrderCreateManyAddressInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => OrderWhereUniqueInputObjectSchema), z.lazy(() => OrderWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrderWhereUniqueInputObjectSchema), z.lazy(() => OrderWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OrderWhereUniqueInputObjectSchema), z.lazy(() => OrderWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrderWhereUniqueInputObjectSchema), z.lazy(() => OrderWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrderUpdateWithWhereUniqueWithoutAddressInputObjectSchema), z.lazy(() => OrderUpdateWithWhereUniqueWithoutAddressInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrderUpdateManyWithWhereWithoutAddressInputObjectSchema), z.lazy(() => OrderUpdateManyWithWhereWithoutAddressInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrderScalarWhereInputObjectSchema), z.lazy(() => OrderScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OrderUncheckedUpdateManyWithoutAddressNestedInputObjectSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutAddressNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutAddressNestedInput>;
export const OrderUncheckedUpdateManyWithoutAddressNestedInputObjectZodSchema = makeSchema();
