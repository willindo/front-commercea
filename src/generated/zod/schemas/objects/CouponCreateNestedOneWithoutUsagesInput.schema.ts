import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponCreateWithoutUsagesInputObjectSchema as CouponCreateWithoutUsagesInputObjectSchema } from './CouponCreateWithoutUsagesInput.schema';
import { CouponUncheckedCreateWithoutUsagesInputObjectSchema as CouponUncheckedCreateWithoutUsagesInputObjectSchema } from './CouponUncheckedCreateWithoutUsagesInput.schema';
import { CouponCreateOrConnectWithoutUsagesInputObjectSchema as CouponCreateOrConnectWithoutUsagesInputObjectSchema } from './CouponCreateOrConnectWithoutUsagesInput.schema';
import { CouponWhereUniqueInputObjectSchema as CouponWhereUniqueInputObjectSchema } from './CouponWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CouponCreateWithoutUsagesInputObjectSchema), z.lazy(() => CouponUncheckedCreateWithoutUsagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CouponCreateOrConnectWithoutUsagesInputObjectSchema).optional(),
  connect: z.lazy(() => CouponWhereUniqueInputObjectSchema).optional()
}).strict();
export const CouponCreateNestedOneWithoutUsagesInputObjectSchema: z.ZodType<Prisma.CouponCreateNestedOneWithoutUsagesInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponCreateNestedOneWithoutUsagesInput>;
export const CouponCreateNestedOneWithoutUsagesInputObjectZodSchema = makeSchema();
