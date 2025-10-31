import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiscountTypeSchema } from '../enums/DiscountType.schema'

const makeSchema = () => z.object({
  set: DiscountTypeSchema.optional()
}).strict();
export const EnumDiscountTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumDiscountTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumDiscountTypeFieldUpdateOperationsInput>;
export const EnumDiscountTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
