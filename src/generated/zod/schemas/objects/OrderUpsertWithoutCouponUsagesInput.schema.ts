import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderUpdateWithoutCouponUsagesInputObjectSchema as OrderUpdateWithoutCouponUsagesInputObjectSchema } from './OrderUpdateWithoutCouponUsagesInput.schema';
import { OrderUncheckedUpdateWithoutCouponUsagesInputObjectSchema as OrderUncheckedUpdateWithoutCouponUsagesInputObjectSchema } from './OrderUncheckedUpdateWithoutCouponUsagesInput.schema';
import { OrderCreateWithoutCouponUsagesInputObjectSchema as OrderCreateWithoutCouponUsagesInputObjectSchema } from './OrderCreateWithoutCouponUsagesInput.schema';
import { OrderUncheckedCreateWithoutCouponUsagesInputObjectSchema as OrderUncheckedCreateWithoutCouponUsagesInputObjectSchema } from './OrderUncheckedCreateWithoutCouponUsagesInput.schema';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrderUpdateWithoutCouponUsagesInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutCouponUsagesInputObjectSchema)]),
  create: z.union([z.lazy(() => OrderCreateWithoutCouponUsagesInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutCouponUsagesInputObjectSchema)]),
  where: z.lazy(() => OrderWhereInputObjectSchema).optional()
}).strict();
export const OrderUpsertWithoutCouponUsagesInputObjectSchema: z.ZodType<Prisma.OrderUpsertWithoutCouponUsagesInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpsertWithoutCouponUsagesInput>;
export const OrderUpsertWithoutCouponUsagesInputObjectZodSchema = makeSchema();
