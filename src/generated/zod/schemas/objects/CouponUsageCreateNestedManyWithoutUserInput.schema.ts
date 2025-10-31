import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageCreateWithoutUserInputObjectSchema as CouponUsageCreateWithoutUserInputObjectSchema } from './CouponUsageCreateWithoutUserInput.schema';
import { CouponUsageUncheckedCreateWithoutUserInputObjectSchema as CouponUsageUncheckedCreateWithoutUserInputObjectSchema } from './CouponUsageUncheckedCreateWithoutUserInput.schema';
import { CouponUsageCreateOrConnectWithoutUserInputObjectSchema as CouponUsageCreateOrConnectWithoutUserInputObjectSchema } from './CouponUsageCreateOrConnectWithoutUserInput.schema';
import { CouponUsageCreateManyUserInputEnvelopeObjectSchema as CouponUsageCreateManyUserInputEnvelopeObjectSchema } from './CouponUsageCreateManyUserInputEnvelope.schema';
import { CouponUsageWhereUniqueInputObjectSchema as CouponUsageWhereUniqueInputObjectSchema } from './CouponUsageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CouponUsageCreateWithoutUserInputObjectSchema), z.lazy(() => CouponUsageCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CouponUsageUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CouponUsageUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CouponUsageCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CouponUsageCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CouponUsageCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CouponUsageWhereUniqueInputObjectSchema), z.lazy(() => CouponUsageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CouponUsageCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.CouponUsageCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageCreateNestedManyWithoutUserInput>;
export const CouponUsageCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
