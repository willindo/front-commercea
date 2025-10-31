import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CouponUpdateOneRequiredWithoutUsagesNestedInputObjectSchema as CouponUpdateOneRequiredWithoutUsagesNestedInputObjectSchema } from './CouponUpdateOneRequiredWithoutUsagesNestedInput.schema';
import { UserUpdateOneRequiredWithoutCouponUsagesNestedInputObjectSchema as UserUpdateOneRequiredWithoutCouponUsagesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCouponUsagesNestedInput.schema';
import { OrderUpdateOneWithoutCouponUsagesNestedInputObjectSchema as OrderUpdateOneWithoutCouponUsagesNestedInputObjectSchema } from './OrderUpdateOneWithoutCouponUsagesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  usedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  coupon: z.lazy(() => CouponUpdateOneRequiredWithoutUsagesNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCouponUsagesNestedInputObjectSchema).optional(),
  order: z.lazy(() => OrderUpdateOneWithoutCouponUsagesNestedInputObjectSchema).optional()
}).strict();
export const CouponUsageUpdateInputObjectSchema: z.ZodType<Prisma.CouponUsageUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageUpdateInput>;
export const CouponUsageUpdateInputObjectZodSchema = makeSchema();
