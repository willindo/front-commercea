import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderCreateWithoutGiftCardUsageInputObjectSchema as OrderCreateWithoutGiftCardUsageInputObjectSchema } from './OrderCreateWithoutGiftCardUsageInput.schema';
import { OrderUncheckedCreateWithoutGiftCardUsageInputObjectSchema as OrderUncheckedCreateWithoutGiftCardUsageInputObjectSchema } from './OrderUncheckedCreateWithoutGiftCardUsageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrderCreateWithoutGiftCardUsageInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutGiftCardUsageInputObjectSchema)])
}).strict();
export const OrderCreateOrConnectWithoutGiftCardUsageInputObjectSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutGiftCardUsageInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateOrConnectWithoutGiftCardUsageInput>;
export const OrderCreateOrConnectWithoutGiftCardUsageInputObjectZodSchema = makeSchema();
