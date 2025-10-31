import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderCreateWithoutGiftCardUsageInputObjectSchema as OrderCreateWithoutGiftCardUsageInputObjectSchema } from './OrderCreateWithoutGiftCardUsageInput.schema';
import { OrderUncheckedCreateWithoutGiftCardUsageInputObjectSchema as OrderUncheckedCreateWithoutGiftCardUsageInputObjectSchema } from './OrderUncheckedCreateWithoutGiftCardUsageInput.schema';
import { OrderCreateOrConnectWithoutGiftCardUsageInputObjectSchema as OrderCreateOrConnectWithoutGiftCardUsageInputObjectSchema } from './OrderCreateOrConnectWithoutGiftCardUsageInput.schema';
import { OrderUpsertWithoutGiftCardUsageInputObjectSchema as OrderUpsertWithoutGiftCardUsageInputObjectSchema } from './OrderUpsertWithoutGiftCardUsageInput.schema';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateToOneWithWhereWithoutGiftCardUsageInputObjectSchema as OrderUpdateToOneWithWhereWithoutGiftCardUsageInputObjectSchema } from './OrderUpdateToOneWithWhereWithoutGiftCardUsageInput.schema';
import { OrderUpdateWithoutGiftCardUsageInputObjectSchema as OrderUpdateWithoutGiftCardUsageInputObjectSchema } from './OrderUpdateWithoutGiftCardUsageInput.schema';
import { OrderUncheckedUpdateWithoutGiftCardUsageInputObjectSchema as OrderUncheckedUpdateWithoutGiftCardUsageInputObjectSchema } from './OrderUncheckedUpdateWithoutGiftCardUsageInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutGiftCardUsageInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutGiftCardUsageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutGiftCardUsageInputObjectSchema).optional(),
  upsert: z.lazy(() => OrderUpsertWithoutGiftCardUsageInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => OrderWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => OrderWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => OrderWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrderUpdateToOneWithWhereWithoutGiftCardUsageInputObjectSchema), z.lazy(() => OrderUpdateWithoutGiftCardUsageInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutGiftCardUsageInputObjectSchema)]).optional()
}).strict();
export const OrderUpdateOneWithoutGiftCardUsageNestedInputObjectSchema: z.ZodType<Prisma.OrderUpdateOneWithoutGiftCardUsageNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpdateOneWithoutGiftCardUsageNestedInput>;
export const OrderUpdateOneWithoutGiftCardUsageNestedInputObjectZodSchema = makeSchema();
