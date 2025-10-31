import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageScalarWhereInputObjectSchema as CouponUsageScalarWhereInputObjectSchema } from './CouponUsageScalarWhereInput.schema';
import { CouponUsageUpdateManyMutationInputObjectSchema as CouponUsageUpdateManyMutationInputObjectSchema } from './CouponUsageUpdateManyMutationInput.schema';
import { CouponUsageUncheckedUpdateManyWithoutOrderInputObjectSchema as CouponUsageUncheckedUpdateManyWithoutOrderInputObjectSchema } from './CouponUsageUncheckedUpdateManyWithoutOrderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CouponUsageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CouponUsageUpdateManyMutationInputObjectSchema), z.lazy(() => CouponUsageUncheckedUpdateManyWithoutOrderInputObjectSchema)])
}).strict();
export const CouponUsageUpdateManyWithWhereWithoutOrderInputObjectSchema: z.ZodType<Prisma.CouponUsageUpdateManyWithWhereWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageUpdateManyWithWhereWithoutOrderInput>;
export const CouponUsageUpdateManyWithWhereWithoutOrderInputObjectZodSchema = makeSchema();
