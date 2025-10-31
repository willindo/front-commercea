import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutCouponUsagesNestedInputObjectSchema as UserUpdateOneRequiredWithoutCouponUsagesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCouponUsagesNestedInput.schema';
import { OrderUpdateOneWithoutCouponUsagesNestedInputObjectSchema as OrderUpdateOneWithoutCouponUsagesNestedInputObjectSchema } from './OrderUpdateOneWithoutCouponUsagesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  usedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCouponUsagesNestedInputObjectSchema).optional(),
  order: z.lazy(() => OrderUpdateOneWithoutCouponUsagesNestedInputObjectSchema).optional()
}).strict();
export const CouponUsageUpdateWithoutCouponInputObjectSchema: z.ZodType<Prisma.CouponUsageUpdateWithoutCouponInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageUpdateWithoutCouponInput>;
export const CouponUsageUpdateWithoutCouponInputObjectZodSchema = makeSchema();
