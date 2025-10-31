import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardUsageWhereUniqueInputObjectSchema as GiftCardUsageWhereUniqueInputObjectSchema } from './GiftCardUsageWhereUniqueInput.schema';
import { GiftCardUsageUpdateWithoutOrderInputObjectSchema as GiftCardUsageUpdateWithoutOrderInputObjectSchema } from './GiftCardUsageUpdateWithoutOrderInput.schema';
import { GiftCardUsageUncheckedUpdateWithoutOrderInputObjectSchema as GiftCardUsageUncheckedUpdateWithoutOrderInputObjectSchema } from './GiftCardUsageUncheckedUpdateWithoutOrderInput.schema';
import { GiftCardUsageCreateWithoutOrderInputObjectSchema as GiftCardUsageCreateWithoutOrderInputObjectSchema } from './GiftCardUsageCreateWithoutOrderInput.schema';
import { GiftCardUsageUncheckedCreateWithoutOrderInputObjectSchema as GiftCardUsageUncheckedCreateWithoutOrderInputObjectSchema } from './GiftCardUsageUncheckedCreateWithoutOrderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => GiftCardUsageUpdateWithoutOrderInputObjectSchema), z.lazy(() => GiftCardUsageUncheckedUpdateWithoutOrderInputObjectSchema)]),
  create: z.union([z.lazy(() => GiftCardUsageCreateWithoutOrderInputObjectSchema), z.lazy(() => GiftCardUsageUncheckedCreateWithoutOrderInputObjectSchema)])
}).strict();
export const GiftCardUsageUpsertWithWhereUniqueWithoutOrderInputObjectSchema: z.ZodType<Prisma.GiftCardUsageUpsertWithWhereUniqueWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageUpsertWithWhereUniqueWithoutOrderInput>;
export const GiftCardUsageUpsertWithWhereUniqueWithoutOrderInputObjectZodSchema = makeSchema();
