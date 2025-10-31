import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponWhereUniqueInputObjectSchema as CouponWhereUniqueInputObjectSchema } from './CouponWhereUniqueInput.schema';
import { CouponCreateWithoutUsagesInputObjectSchema as CouponCreateWithoutUsagesInputObjectSchema } from './CouponCreateWithoutUsagesInput.schema';
import { CouponUncheckedCreateWithoutUsagesInputObjectSchema as CouponUncheckedCreateWithoutUsagesInputObjectSchema } from './CouponUncheckedCreateWithoutUsagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CouponWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CouponCreateWithoutUsagesInputObjectSchema), z.lazy(() => CouponUncheckedCreateWithoutUsagesInputObjectSchema)])
}).strict();
export const CouponCreateOrConnectWithoutUsagesInputObjectSchema: z.ZodType<Prisma.CouponCreateOrConnectWithoutUsagesInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponCreateOrConnectWithoutUsagesInput>;
export const CouponCreateOrConnectWithoutUsagesInputObjectZodSchema = makeSchema();
