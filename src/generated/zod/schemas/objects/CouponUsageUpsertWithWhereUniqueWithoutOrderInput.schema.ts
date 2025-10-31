import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageWhereUniqueInputObjectSchema as CouponUsageWhereUniqueInputObjectSchema } from './CouponUsageWhereUniqueInput.schema';
import { CouponUsageUpdateWithoutOrderInputObjectSchema as CouponUsageUpdateWithoutOrderInputObjectSchema } from './CouponUsageUpdateWithoutOrderInput.schema';
import { CouponUsageUncheckedUpdateWithoutOrderInputObjectSchema as CouponUsageUncheckedUpdateWithoutOrderInputObjectSchema } from './CouponUsageUncheckedUpdateWithoutOrderInput.schema';
import { CouponUsageCreateWithoutOrderInputObjectSchema as CouponUsageCreateWithoutOrderInputObjectSchema } from './CouponUsageCreateWithoutOrderInput.schema';
import { CouponUsageUncheckedCreateWithoutOrderInputObjectSchema as CouponUsageUncheckedCreateWithoutOrderInputObjectSchema } from './CouponUsageUncheckedCreateWithoutOrderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CouponUsageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CouponUsageUpdateWithoutOrderInputObjectSchema), z.lazy(() => CouponUsageUncheckedUpdateWithoutOrderInputObjectSchema)]),
  create: z.union([z.lazy(() => CouponUsageCreateWithoutOrderInputObjectSchema), z.lazy(() => CouponUsageUncheckedCreateWithoutOrderInputObjectSchema)])
}).strict();
export const CouponUsageUpsertWithWhereUniqueWithoutOrderInputObjectSchema: z.ZodType<Prisma.CouponUsageUpsertWithWhereUniqueWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageUpsertWithWhereUniqueWithoutOrderInput>;
export const CouponUsageUpsertWithWhereUniqueWithoutOrderInputObjectZodSchema = makeSchema();
