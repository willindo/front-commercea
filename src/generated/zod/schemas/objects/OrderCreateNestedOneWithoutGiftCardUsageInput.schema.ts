import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderCreateWithoutGiftCardUsageInputObjectSchema as OrderCreateWithoutGiftCardUsageInputObjectSchema } from './OrderCreateWithoutGiftCardUsageInput.schema';
import { OrderUncheckedCreateWithoutGiftCardUsageInputObjectSchema as OrderUncheckedCreateWithoutGiftCardUsageInputObjectSchema } from './OrderUncheckedCreateWithoutGiftCardUsageInput.schema';
import { OrderCreateOrConnectWithoutGiftCardUsageInputObjectSchema as OrderCreateOrConnectWithoutGiftCardUsageInputObjectSchema } from './OrderCreateOrConnectWithoutGiftCardUsageInput.schema';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutGiftCardUsageInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutGiftCardUsageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutGiftCardUsageInputObjectSchema).optional(),
  connect: z.lazy(() => OrderWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrderCreateNestedOneWithoutGiftCardUsageInputObjectSchema: z.ZodType<Prisma.OrderCreateNestedOneWithoutGiftCardUsageInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateNestedOneWithoutGiftCardUsageInput>;
export const OrderCreateNestedOneWithoutGiftCardUsageInputObjectZodSchema = makeSchema();
