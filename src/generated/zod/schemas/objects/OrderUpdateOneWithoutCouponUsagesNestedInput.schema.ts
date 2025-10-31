import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderCreateWithoutCouponUsagesInputObjectSchema as OrderCreateWithoutCouponUsagesInputObjectSchema } from './OrderCreateWithoutCouponUsagesInput.schema';
import { OrderUncheckedCreateWithoutCouponUsagesInputObjectSchema as OrderUncheckedCreateWithoutCouponUsagesInputObjectSchema } from './OrderUncheckedCreateWithoutCouponUsagesInput.schema';
import { OrderCreateOrConnectWithoutCouponUsagesInputObjectSchema as OrderCreateOrConnectWithoutCouponUsagesInputObjectSchema } from './OrderCreateOrConnectWithoutCouponUsagesInput.schema';
import { OrderUpsertWithoutCouponUsagesInputObjectSchema as OrderUpsertWithoutCouponUsagesInputObjectSchema } from './OrderUpsertWithoutCouponUsagesInput.schema';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateToOneWithWhereWithoutCouponUsagesInputObjectSchema as OrderUpdateToOneWithWhereWithoutCouponUsagesInputObjectSchema } from './OrderUpdateToOneWithWhereWithoutCouponUsagesInput.schema';
import { OrderUpdateWithoutCouponUsagesInputObjectSchema as OrderUpdateWithoutCouponUsagesInputObjectSchema } from './OrderUpdateWithoutCouponUsagesInput.schema';
import { OrderUncheckedUpdateWithoutCouponUsagesInputObjectSchema as OrderUncheckedUpdateWithoutCouponUsagesInputObjectSchema } from './OrderUncheckedUpdateWithoutCouponUsagesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutCouponUsagesInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutCouponUsagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutCouponUsagesInputObjectSchema).optional(),
  upsert: z.lazy(() => OrderUpsertWithoutCouponUsagesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => OrderWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => OrderWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => OrderWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrderUpdateToOneWithWhereWithoutCouponUsagesInputObjectSchema), z.lazy(() => OrderUpdateWithoutCouponUsagesInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutCouponUsagesInputObjectSchema)]).optional()
}).strict();
export const OrderUpdateOneWithoutCouponUsagesNestedInputObjectSchema: z.ZodType<Prisma.OrderUpdateOneWithoutCouponUsagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpdateOneWithoutCouponUsagesNestedInput>;
export const OrderUpdateOneWithoutCouponUsagesNestedInputObjectZodSchema = makeSchema();
