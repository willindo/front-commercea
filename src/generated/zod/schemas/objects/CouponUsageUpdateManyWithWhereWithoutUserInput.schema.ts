import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageScalarWhereInputObjectSchema as CouponUsageScalarWhereInputObjectSchema } from './CouponUsageScalarWhereInput.schema';
import { CouponUsageUpdateManyMutationInputObjectSchema as CouponUsageUpdateManyMutationInputObjectSchema } from './CouponUsageUpdateManyMutationInput.schema';
import { CouponUsageUncheckedUpdateManyWithoutUserInputObjectSchema as CouponUsageUncheckedUpdateManyWithoutUserInputObjectSchema } from './CouponUsageUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CouponUsageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CouponUsageUpdateManyMutationInputObjectSchema), z.lazy(() => CouponUsageUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const CouponUsageUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.CouponUsageUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageUpdateManyWithWhereWithoutUserInput>;
export const CouponUsageUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
