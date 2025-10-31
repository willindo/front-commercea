import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderUpdateWithoutGiftCardUsageInputObjectSchema as OrderUpdateWithoutGiftCardUsageInputObjectSchema } from './OrderUpdateWithoutGiftCardUsageInput.schema';
import { OrderUncheckedUpdateWithoutGiftCardUsageInputObjectSchema as OrderUncheckedUpdateWithoutGiftCardUsageInputObjectSchema } from './OrderUncheckedUpdateWithoutGiftCardUsageInput.schema';
import { OrderCreateWithoutGiftCardUsageInputObjectSchema as OrderCreateWithoutGiftCardUsageInputObjectSchema } from './OrderCreateWithoutGiftCardUsageInput.schema';
import { OrderUncheckedCreateWithoutGiftCardUsageInputObjectSchema as OrderUncheckedCreateWithoutGiftCardUsageInputObjectSchema } from './OrderUncheckedCreateWithoutGiftCardUsageInput.schema';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrderUpdateWithoutGiftCardUsageInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutGiftCardUsageInputObjectSchema)]),
  create: z.union([z.lazy(() => OrderCreateWithoutGiftCardUsageInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutGiftCardUsageInputObjectSchema)]),
  where: z.lazy(() => OrderWhereInputObjectSchema).optional()
}).strict();
export const OrderUpsertWithoutGiftCardUsageInputObjectSchema: z.ZodType<Prisma.OrderUpsertWithoutGiftCardUsageInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpsertWithoutGiftCardUsageInput>;
export const OrderUpsertWithoutGiftCardUsageInputObjectZodSchema = makeSchema();
