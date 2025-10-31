import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  usedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CouponUsageUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.CouponUsageUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageUpdateManyMutationInput>;
export const CouponUsageUpdateManyMutationInputObjectZodSchema = makeSchema();
