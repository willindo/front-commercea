import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageWhereUniqueInputObjectSchema as CouponUsageWhereUniqueInputObjectSchema } from './CouponUsageWhereUniqueInput.schema';
import { CouponUsageUpdateWithoutUserInputObjectSchema as CouponUsageUpdateWithoutUserInputObjectSchema } from './CouponUsageUpdateWithoutUserInput.schema';
import { CouponUsageUncheckedUpdateWithoutUserInputObjectSchema as CouponUsageUncheckedUpdateWithoutUserInputObjectSchema } from './CouponUsageUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CouponUsageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CouponUsageUpdateWithoutUserInputObjectSchema), z.lazy(() => CouponUsageUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const CouponUsageUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.CouponUsageUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageUpdateWithWhereUniqueWithoutUserInput>;
export const CouponUsageUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
