import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema';
import { OrderUpdateWithoutGiftCardUsageInputObjectSchema as OrderUpdateWithoutGiftCardUsageInputObjectSchema } from './OrderUpdateWithoutGiftCardUsageInput.schema';
import { OrderUncheckedUpdateWithoutGiftCardUsageInputObjectSchema as OrderUncheckedUpdateWithoutGiftCardUsageInputObjectSchema } from './OrderUncheckedUpdateWithoutGiftCardUsageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrderUpdateWithoutGiftCardUsageInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutGiftCardUsageInputObjectSchema)])
}).strict();
export const OrderUpdateToOneWithWhereWithoutGiftCardUsageInputObjectSchema: z.ZodType<Prisma.OrderUpdateToOneWithWhereWithoutGiftCardUsageInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpdateToOneWithWhereWithoutGiftCardUsageInput>;
export const OrderUpdateToOneWithWhereWithoutGiftCardUsageInputObjectZodSchema = makeSchema();
