import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardUsageCreateWithoutOrderInputObjectSchema as GiftCardUsageCreateWithoutOrderInputObjectSchema } from './GiftCardUsageCreateWithoutOrderInput.schema';
import { GiftCardUsageUncheckedCreateWithoutOrderInputObjectSchema as GiftCardUsageUncheckedCreateWithoutOrderInputObjectSchema } from './GiftCardUsageUncheckedCreateWithoutOrderInput.schema';
import { GiftCardUsageCreateOrConnectWithoutOrderInputObjectSchema as GiftCardUsageCreateOrConnectWithoutOrderInputObjectSchema } from './GiftCardUsageCreateOrConnectWithoutOrderInput.schema';
import { GiftCardUsageCreateManyOrderInputEnvelopeObjectSchema as GiftCardUsageCreateManyOrderInputEnvelopeObjectSchema } from './GiftCardUsageCreateManyOrderInputEnvelope.schema';
import { GiftCardUsageWhereUniqueInputObjectSchema as GiftCardUsageWhereUniqueInputObjectSchema } from './GiftCardUsageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GiftCardUsageCreateWithoutOrderInputObjectSchema), z.lazy(() => GiftCardUsageCreateWithoutOrderInputObjectSchema).array(), z.lazy(() => GiftCardUsageUncheckedCreateWithoutOrderInputObjectSchema), z.lazy(() => GiftCardUsageUncheckedCreateWithoutOrderInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GiftCardUsageCreateOrConnectWithoutOrderInputObjectSchema), z.lazy(() => GiftCardUsageCreateOrConnectWithoutOrderInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GiftCardUsageCreateManyOrderInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema), z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const GiftCardUsageUncheckedCreateNestedManyWithoutOrderInputObjectSchema: z.ZodType<Prisma.GiftCardUsageUncheckedCreateNestedManyWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageUncheckedCreateNestedManyWithoutOrderInput>;
export const GiftCardUsageUncheckedCreateNestedManyWithoutOrderInputObjectZodSchema = makeSchema();
