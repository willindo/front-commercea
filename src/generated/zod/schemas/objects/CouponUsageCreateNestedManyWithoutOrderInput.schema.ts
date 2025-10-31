import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CouponUsageCreateWithoutOrderInputObjectSchema as CouponUsageCreateWithoutOrderInputObjectSchema } from './CouponUsageCreateWithoutOrderInput.schema';
import { CouponUsageUncheckedCreateWithoutOrderInputObjectSchema as CouponUsageUncheckedCreateWithoutOrderInputObjectSchema } from './CouponUsageUncheckedCreateWithoutOrderInput.schema';
import { CouponUsageCreateOrConnectWithoutOrderInputObjectSchema as CouponUsageCreateOrConnectWithoutOrderInputObjectSchema } from './CouponUsageCreateOrConnectWithoutOrderInput.schema';
import { CouponUsageCreateManyOrderInputEnvelopeObjectSchema as CouponUsageCreateManyOrderInputEnvelopeObjectSchema } from './CouponUsageCreateManyOrderInputEnvelope.schema';
import { CouponUsageWhereUniqueInputObjectSchema as CouponUsageWhereUniqueInputObjectSchema } from './CouponUsageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CouponUsageCreateWithoutOrderInputObjectSchema), z.lazy(() => CouponUsageCreateWithoutOrderInputObjectSchema).array(), z.lazy(() => CouponUsageUncheckedCreateWithoutOrderInputObjectSchema), z.lazy(() => CouponUsageUncheckedCreateWithoutOrderInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CouponUsageCreateOrConnectWithoutOrderInputObjectSchema), z.lazy(() => CouponUsageCreateOrConnectWithoutOrderInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CouponUsageCreateManyOrderInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CouponUsageWhereUniqueInputObjectSchema), z.lazy(() => CouponUsageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CouponUsageCreateNestedManyWithoutOrderInputObjectSchema: z.ZodType<Prisma.CouponUsageCreateNestedManyWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageCreateNestedManyWithoutOrderInput>;
export const CouponUsageCreateNestedManyWithoutOrderInputObjectZodSchema = makeSchema();
