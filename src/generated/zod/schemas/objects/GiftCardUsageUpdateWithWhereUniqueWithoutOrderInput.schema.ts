import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardUsageWhereUniqueInputObjectSchema as GiftCardUsageWhereUniqueInputObjectSchema } from './GiftCardUsageWhereUniqueInput.schema';
import { GiftCardUsageUpdateWithoutOrderInputObjectSchema as GiftCardUsageUpdateWithoutOrderInputObjectSchema } from './GiftCardUsageUpdateWithoutOrderInput.schema';
import { GiftCardUsageUncheckedUpdateWithoutOrderInputObjectSchema as GiftCardUsageUncheckedUpdateWithoutOrderInputObjectSchema } from './GiftCardUsageUncheckedUpdateWithoutOrderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GiftCardUsageUpdateWithoutOrderInputObjectSchema), z.lazy(() => GiftCardUsageUncheckedUpdateWithoutOrderInputObjectSchema)])
}).strict();
export const GiftCardUsageUpdateWithWhereUniqueWithoutOrderInputObjectSchema: z.ZodType<Prisma.GiftCardUsageUpdateWithWhereUniqueWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageUpdateWithWhereUniqueWithoutOrderInput>;
export const GiftCardUsageUpdateWithWhereUniqueWithoutOrderInputObjectZodSchema = makeSchema();
