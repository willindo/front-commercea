import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderCreateWithoutCouponUsagesInputObjectSchema as OrderCreateWithoutCouponUsagesInputObjectSchema } from './OrderCreateWithoutCouponUsagesInput.schema';
import { OrderUncheckedCreateWithoutCouponUsagesInputObjectSchema as OrderUncheckedCreateWithoutCouponUsagesInputObjectSchema } from './OrderUncheckedCreateWithoutCouponUsagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrderCreateWithoutCouponUsagesInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutCouponUsagesInputObjectSchema)])
}).strict();
export const OrderCreateOrConnectWithoutCouponUsagesInputObjectSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutCouponUsagesInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateOrConnectWithoutCouponUsagesInput>;
export const OrderCreateOrConnectWithoutCouponUsagesInputObjectZodSchema = makeSchema();
