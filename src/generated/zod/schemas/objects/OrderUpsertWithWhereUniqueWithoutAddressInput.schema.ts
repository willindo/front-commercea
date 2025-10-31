import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithoutAddressInputObjectSchema as OrderUpdateWithoutAddressInputObjectSchema } from './OrderUpdateWithoutAddressInput.schema';
import { OrderUncheckedUpdateWithoutAddressInputObjectSchema as OrderUncheckedUpdateWithoutAddressInputObjectSchema } from './OrderUncheckedUpdateWithoutAddressInput.schema';
import { OrderCreateWithoutAddressInputObjectSchema as OrderCreateWithoutAddressInputObjectSchema } from './OrderCreateWithoutAddressInput.schema';
import { OrderUncheckedCreateWithoutAddressInputObjectSchema as OrderUncheckedCreateWithoutAddressInputObjectSchema } from './OrderUncheckedCreateWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OrderUpdateWithoutAddressInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutAddressInputObjectSchema)]),
  create: z.union([z.lazy(() => OrderCreateWithoutAddressInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutAddressInputObjectSchema)])
}).strict();
export const OrderUpsertWithWhereUniqueWithoutAddressInputObjectSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutAddressInput>;
export const OrderUpsertWithWhereUniqueWithoutAddressInputObjectZodSchema = makeSchema();
