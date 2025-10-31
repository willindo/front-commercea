import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema';
import { OrderUpdateWithoutCouponUsagesInputObjectSchema as OrderUpdateWithoutCouponUsagesInputObjectSchema } from './OrderUpdateWithoutCouponUsagesInput.schema';
import { OrderUncheckedUpdateWithoutCouponUsagesInputObjectSchema as OrderUncheckedUpdateWithoutCouponUsagesInputObjectSchema } from './OrderUncheckedUpdateWithoutCouponUsagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrderUpdateWithoutCouponUsagesInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutCouponUsagesInputObjectSchema)])
}).strict();
export const OrderUpdateToOneWithWhereWithoutCouponUsagesInputObjectSchema: z.ZodType<Prisma.OrderUpdateToOneWithWhereWithoutCouponUsagesInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpdateToOneWithWhereWithoutCouponUsagesInput>;
export const OrderUpdateToOneWithWhereWithoutCouponUsagesInputObjectZodSchema = makeSchema();
