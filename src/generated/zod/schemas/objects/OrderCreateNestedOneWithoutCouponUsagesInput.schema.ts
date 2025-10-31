import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderCreateWithoutCouponUsagesInputObjectSchema as OrderCreateWithoutCouponUsagesInputObjectSchema } from './OrderCreateWithoutCouponUsagesInput.schema';
import { OrderUncheckedCreateWithoutCouponUsagesInputObjectSchema as OrderUncheckedCreateWithoutCouponUsagesInputObjectSchema } from './OrderUncheckedCreateWithoutCouponUsagesInput.schema';
import { OrderCreateOrConnectWithoutCouponUsagesInputObjectSchema as OrderCreateOrConnectWithoutCouponUsagesInputObjectSchema } from './OrderCreateOrConnectWithoutCouponUsagesInput.schema';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutCouponUsagesInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutCouponUsagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutCouponUsagesInputObjectSchema).optional(),
  connect: z.lazy(() => OrderWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrderCreateNestedOneWithoutCouponUsagesInputObjectSchema: z.ZodType<Prisma.OrderCreateNestedOneWithoutCouponUsagesInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateNestedOneWithoutCouponUsagesInput>;
export const OrderCreateNestedOneWithoutCouponUsagesInputObjectZodSchema = makeSchema();
