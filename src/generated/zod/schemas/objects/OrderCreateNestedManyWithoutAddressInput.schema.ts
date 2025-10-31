import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderCreateWithoutAddressInputObjectSchema as OrderCreateWithoutAddressInputObjectSchema } from './OrderCreateWithoutAddressInput.schema';
import { OrderUncheckedCreateWithoutAddressInputObjectSchema as OrderUncheckedCreateWithoutAddressInputObjectSchema } from './OrderUncheckedCreateWithoutAddressInput.schema';
import { OrderCreateOrConnectWithoutAddressInputObjectSchema as OrderCreateOrConnectWithoutAddressInputObjectSchema } from './OrderCreateOrConnectWithoutAddressInput.schema';
import { OrderCreateManyAddressInputEnvelopeObjectSchema as OrderCreateManyAddressInputEnvelopeObjectSchema } from './OrderCreateManyAddressInputEnvelope.schema';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutAddressInputObjectSchema), z.lazy(() => OrderCreateWithoutAddressInputObjectSchema).array(), z.lazy(() => OrderUncheckedCreateWithoutAddressInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutAddressInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrderCreateOrConnectWithoutAddressInputObjectSchema), z.lazy(() => OrderCreateOrConnectWithoutAddressInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrderCreateManyAddressInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => OrderWhereUniqueInputObjectSchema), z.lazy(() => OrderWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OrderCreateNestedManyWithoutAddressInputObjectSchema: z.ZodType<Prisma.OrderCreateNestedManyWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateNestedManyWithoutAddressInput>;
export const OrderCreateNestedManyWithoutAddressInputObjectZodSchema = makeSchema();
