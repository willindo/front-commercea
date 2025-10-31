import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithoutAddressInputObjectSchema as OrderUpdateWithoutAddressInputObjectSchema } from './OrderUpdateWithoutAddressInput.schema';
import { OrderUncheckedUpdateWithoutAddressInputObjectSchema as OrderUncheckedUpdateWithoutAddressInputObjectSchema } from './OrderUncheckedUpdateWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OrderUpdateWithoutAddressInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutAddressInputObjectSchema)])
}).strict();
export const OrderUpdateWithWhereUniqueWithoutAddressInputObjectSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutAddressInput>;
export const OrderUpdateWithWhereUniqueWithoutAddressInputObjectZodSchema = makeSchema();
