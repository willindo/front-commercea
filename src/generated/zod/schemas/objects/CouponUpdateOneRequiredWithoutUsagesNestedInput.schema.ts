import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponCreateWithoutUsagesInputObjectSchema as CouponCreateWithoutUsagesInputObjectSchema } from './CouponCreateWithoutUsagesInput.schema';
import { CouponUncheckedCreateWithoutUsagesInputObjectSchema as CouponUncheckedCreateWithoutUsagesInputObjectSchema } from './CouponUncheckedCreateWithoutUsagesInput.schema';
import { CouponCreateOrConnectWithoutUsagesInputObjectSchema as CouponCreateOrConnectWithoutUsagesInputObjectSchema } from './CouponCreateOrConnectWithoutUsagesInput.schema';
import { CouponUpsertWithoutUsagesInputObjectSchema as CouponUpsertWithoutUsagesInputObjectSchema } from './CouponUpsertWithoutUsagesInput.schema';
import { CouponWhereUniqueInputObjectSchema as CouponWhereUniqueInputObjectSchema } from './CouponWhereUniqueInput.schema';
import { CouponUpdateToOneWithWhereWithoutUsagesInputObjectSchema as CouponUpdateToOneWithWhereWithoutUsagesInputObjectSchema } from './CouponUpdateToOneWithWhereWithoutUsagesInput.schema';
import { CouponUpdateWithoutUsagesInputObjectSchema as CouponUpdateWithoutUsagesInputObjectSchema } from './CouponUpdateWithoutUsagesInput.schema';
import { CouponUncheckedUpdateWithoutUsagesInputObjectSchema as CouponUncheckedUpdateWithoutUsagesInputObjectSchema } from './CouponUncheckedUpdateWithoutUsagesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CouponCreateWithoutUsagesInputObjectSchema), z.lazy(() => CouponUncheckedCreateWithoutUsagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CouponCreateOrConnectWithoutUsagesInputObjectSchema).optional(),
  upsert: z.lazy(() => CouponUpsertWithoutUsagesInputObjectSchema).optional(),
  connect: z.lazy(() => CouponWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CouponUpdateToOneWithWhereWithoutUsagesInputObjectSchema), z.lazy(() => CouponUpdateWithoutUsagesInputObjectSchema), z.lazy(() => CouponUncheckedUpdateWithoutUsagesInputObjectSchema)]).optional()
}).strict();
export const CouponUpdateOneRequiredWithoutUsagesNestedInputObjectSchema: z.ZodType<Prisma.CouponUpdateOneRequiredWithoutUsagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUpdateOneRequiredWithoutUsagesNestedInput>;
export const CouponUpdateOneRequiredWithoutUsagesNestedInputObjectZodSchema = makeSchema();
