import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { OrderUpdateOneWithoutGiftCardUsageNestedInputObjectSchema as OrderUpdateOneWithoutGiftCardUsageNestedInputObjectSchema } from './OrderUpdateOneWithoutGiftCardUsageNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  amountUsed: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  usedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.lazy(() => OrderUpdateOneWithoutGiftCardUsageNestedInputObjectSchema).optional()
}).strict();
export const GiftCardUsageUpdateWithoutGiftCardInputObjectSchema: z.ZodType<Prisma.GiftCardUsageUpdateWithoutGiftCardInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageUpdateWithoutGiftCardInput>;
export const GiftCardUsageUpdateWithoutGiftCardInputObjectZodSchema = makeSchema();
