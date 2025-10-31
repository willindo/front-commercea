import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageWhereUniqueInputObjectSchema as CouponUsageWhereUniqueInputObjectSchema } from './CouponUsageWhereUniqueInput.schema';
import { CouponUsageUpdateWithoutUserInputObjectSchema as CouponUsageUpdateWithoutUserInputObjectSchema } from './CouponUsageUpdateWithoutUserInput.schema';
import { CouponUsageUncheckedUpdateWithoutUserInputObjectSchema as CouponUsageUncheckedUpdateWithoutUserInputObjectSchema } from './CouponUsageUncheckedUpdateWithoutUserInput.schema';
import { CouponUsageCreateWithoutUserInputObjectSchema as CouponUsageCreateWithoutUserInputObjectSchema } from './CouponUsageCreateWithoutUserInput.schema';
import { CouponUsageUncheckedCreateWithoutUserInputObjectSchema as CouponUsageUncheckedCreateWithoutUserInputObjectSchema } from './CouponUsageUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CouponUsageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CouponUsageUpdateWithoutUserInputObjectSchema), z.lazy(() => CouponUsageUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => CouponUsageCreateWithoutUserInputObjectSchema), z.lazy(() => CouponUsageUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const CouponUsageUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.CouponUsageUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageUpsertWithWhereUniqueWithoutUserInput>;
export const CouponUsageUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
