import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardUsageCreateWithoutGiftCardInputObjectSchema as GiftCardUsageCreateWithoutGiftCardInputObjectSchema } from './GiftCardUsageCreateWithoutGiftCardInput.schema';
import { GiftCardUsageUncheckedCreateWithoutGiftCardInputObjectSchema as GiftCardUsageUncheckedCreateWithoutGiftCardInputObjectSchema } from './GiftCardUsageUncheckedCreateWithoutGiftCardInput.schema';
import { GiftCardUsageCreateOrConnectWithoutGiftCardInputObjectSchema as GiftCardUsageCreateOrConnectWithoutGiftCardInputObjectSchema } from './GiftCardUsageCreateOrConnectWithoutGiftCardInput.schema';
import { GiftCardUsageCreateManyGiftCardInputEnvelopeObjectSchema as GiftCardUsageCreateManyGiftCardInputEnvelopeObjectSchema } from './GiftCardUsageCreateManyGiftCardInputEnvelope.schema';
import { GiftCardUsageWhereUniqueInputObjectSchema as GiftCardUsageWhereUniqueInputObjectSchema } from './GiftCardUsageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GiftCardUsageCreateWithoutGiftCardInputObjectSchema), z.lazy(() => GiftCardUsageCreateWithoutGiftCardInputObjectSchema).array(), z.lazy(() => GiftCardUsageUncheckedCreateWithoutGiftCardInputObjectSchema), z.lazy(() => GiftCardUsageUncheckedCreateWithoutGiftCardInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GiftCardUsageCreateOrConnectWithoutGiftCardInputObjectSchema), z.lazy(() => GiftCardUsageCreateOrConnectWithoutGiftCardInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GiftCardUsageCreateManyGiftCardInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema), z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const GiftCardUsageUncheckedCreateNestedManyWithoutGiftCardInputObjectSchema: z.ZodType<Prisma.GiftCardUsageUncheckedCreateNestedManyWithoutGiftCardInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageUncheckedCreateNestedManyWithoutGiftCardInput>;
export const GiftCardUsageUncheckedCreateNestedManyWithoutGiftCardInputObjectZodSchema = makeSchema();
