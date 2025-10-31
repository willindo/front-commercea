import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageWhereUniqueInputObjectSchema as CouponUsageWhereUniqueInputObjectSchema } from './CouponUsageWhereUniqueInput.schema';
import { CouponUsageCreateWithoutOrderInputObjectSchema as CouponUsageCreateWithoutOrderInputObjectSchema } from './CouponUsageCreateWithoutOrderInput.schema';
import { CouponUsageUncheckedCreateWithoutOrderInputObjectSchema as CouponUsageUncheckedCreateWithoutOrderInputObjectSchema } from './CouponUsageUncheckedCreateWithoutOrderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CouponUsageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CouponUsageCreateWithoutOrderInputObjectSchema), z.lazy(() => CouponUsageUncheckedCreateWithoutOrderInputObjectSchema)])
}).strict();
export const CouponUsageCreateOrConnectWithoutOrderInputObjectSchema: z.ZodType<Prisma.CouponUsageCreateOrConnectWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageCreateOrConnectWithoutOrderInput>;
export const CouponUsageCreateOrConnectWithoutOrderInputObjectZodSchema = makeSchema();
