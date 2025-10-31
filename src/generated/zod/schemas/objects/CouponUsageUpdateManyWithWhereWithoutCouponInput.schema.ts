import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageScalarWhereInputObjectSchema as CouponUsageScalarWhereInputObjectSchema } from './CouponUsageScalarWhereInput.schema';
import { CouponUsageUpdateManyMutationInputObjectSchema as CouponUsageUpdateManyMutationInputObjectSchema } from './CouponUsageUpdateManyMutationInput.schema';
import { CouponUsageUncheckedUpdateManyWithoutCouponInputObjectSchema as CouponUsageUncheckedUpdateManyWithoutCouponInputObjectSchema } from './CouponUsageUncheckedUpdateManyWithoutCouponInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CouponUsageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CouponUsageUpdateManyMutationInputObjectSchema), z.lazy(() => CouponUsageUncheckedUpdateManyWithoutCouponInputObjectSchema)])
}).strict();
export const CouponUsageUpdateManyWithWhereWithoutCouponInputObjectSchema: z.ZodType<Prisma.CouponUsageUpdateManyWithWhereWithoutCouponInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageUpdateManyWithWhereWithoutCouponInput>;
export const CouponUsageUpdateManyWithWhereWithoutCouponInputObjectZodSchema = makeSchema();
