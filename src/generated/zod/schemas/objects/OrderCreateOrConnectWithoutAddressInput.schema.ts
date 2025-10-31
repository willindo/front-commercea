import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderCreateWithoutAddressInputObjectSchema as OrderCreateWithoutAddressInputObjectSchema } from './OrderCreateWithoutAddressInput.schema';
import { OrderUncheckedCreateWithoutAddressInputObjectSchema as OrderUncheckedCreateWithoutAddressInputObjectSchema } from './OrderUncheckedCreateWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrderCreateWithoutAddressInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutAddressInputObjectSchema)])
}).strict();
export const OrderCreateOrConnectWithoutAddressInputObjectSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateOrConnectWithoutAddressInput>;
export const OrderCreateOrConnectWithoutAddressInputObjectZodSchema = makeSchema();
