import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponWhereInputObjectSchema as CouponWhereInputObjectSchema } from './CouponWhereInput.schema';
import { CouponUpdateWithoutUsagesInputObjectSchema as CouponUpdateWithoutUsagesInputObjectSchema } from './CouponUpdateWithoutUsagesInput.schema';
import { CouponUncheckedUpdateWithoutUsagesInputObjectSchema as CouponUncheckedUpdateWithoutUsagesInputObjectSchema } from './CouponUncheckedUpdateWithoutUsagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CouponWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CouponUpdateWithoutUsagesInputObjectSchema), z.lazy(() => CouponUncheckedUpdateWithoutUsagesInputObjectSchema)])
}).strict();
export const CouponUpdateToOneWithWhereWithoutUsagesInputObjectSchema: z.ZodType<Prisma.CouponUpdateToOneWithWhereWithoutUsagesInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUpdateToOneWithWhereWithoutUsagesInput>;
export const CouponUpdateToOneWithWhereWithoutUsagesInputObjectZodSchema = makeSchema();
