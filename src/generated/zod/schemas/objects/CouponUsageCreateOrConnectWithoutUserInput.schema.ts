import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageWhereUniqueInputObjectSchema as CouponUsageWhereUniqueInputObjectSchema } from './CouponUsageWhereUniqueInput.schema';
import { CouponUsageCreateWithoutUserInputObjectSchema as CouponUsageCreateWithoutUserInputObjectSchema } from './CouponUsageCreateWithoutUserInput.schema';
import { CouponUsageUncheckedCreateWithoutUserInputObjectSchema as CouponUsageUncheckedCreateWithoutUserInputObjectSchema } from './CouponUsageUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CouponUsageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CouponUsageCreateWithoutUserInputObjectSchema), z.lazy(() => CouponUsageUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const CouponUsageCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.CouponUsageCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageCreateOrConnectWithoutUserInput>;
export const CouponUsageCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
