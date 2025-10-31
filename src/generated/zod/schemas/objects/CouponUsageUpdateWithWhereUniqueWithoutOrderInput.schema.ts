import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageWhereUniqueInputObjectSchema as CouponUsageWhereUniqueInputObjectSchema } from './CouponUsageWhereUniqueInput.schema';
import { CouponUsageUpdateWithoutOrderInputObjectSchema as CouponUsageUpdateWithoutOrderInputObjectSchema } from './CouponUsageUpdateWithoutOrderInput.schema';
import { CouponUsageUncheckedUpdateWithoutOrderInputObjectSchema as CouponUsageUncheckedUpdateWithoutOrderInputObjectSchema } from './CouponUsageUncheckedUpdateWithoutOrderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CouponUsageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CouponUsageUpdateWithoutOrderInputObjectSchema), z.lazy(() => CouponUsageUncheckedUpdateWithoutOrderInputObjectSchema)])
}).strict();
export const CouponUsageUpdateWithWhereUniqueWithoutOrderInputObjectSchema: z.ZodType<Prisma.CouponUsageUpdateWithWhereUniqueWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageUpdateWithWhereUniqueWithoutOrderInput>;
export const CouponUsageUpdateWithWhereUniqueWithoutOrderInputObjectZodSchema = makeSchema();
