import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUpdateWithoutUsagesInputObjectSchema as CouponUpdateWithoutUsagesInputObjectSchema } from './CouponUpdateWithoutUsagesInput.schema';
import { CouponUncheckedUpdateWithoutUsagesInputObjectSchema as CouponUncheckedUpdateWithoutUsagesInputObjectSchema } from './CouponUncheckedUpdateWithoutUsagesInput.schema';
import { CouponCreateWithoutUsagesInputObjectSchema as CouponCreateWithoutUsagesInputObjectSchema } from './CouponCreateWithoutUsagesInput.schema';
import { CouponUncheckedCreateWithoutUsagesInputObjectSchema as CouponUncheckedCreateWithoutUsagesInputObjectSchema } from './CouponUncheckedCreateWithoutUsagesInput.schema';
import { CouponWhereInputObjectSchema as CouponWhereInputObjectSchema } from './CouponWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CouponUpdateWithoutUsagesInputObjectSchema), z.lazy(() => CouponUncheckedUpdateWithoutUsagesInputObjectSchema)]),
  create: z.union([z.lazy(() => CouponCreateWithoutUsagesInputObjectSchema), z.lazy(() => CouponUncheckedCreateWithoutUsagesInputObjectSchema)]),
  where: z.lazy(() => CouponWhereInputObjectSchema).optional()
}).strict();
export const CouponUpsertWithoutUsagesInputObjectSchema: z.ZodType<Prisma.CouponUpsertWithoutUsagesInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUpsertWithoutUsagesInput>;
export const CouponUpsertWithoutUsagesInputObjectZodSchema = makeSchema();
