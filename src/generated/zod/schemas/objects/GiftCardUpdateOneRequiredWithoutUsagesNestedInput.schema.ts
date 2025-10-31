import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardCreateWithoutUsagesInputObjectSchema as GiftCardCreateWithoutUsagesInputObjectSchema } from './GiftCardCreateWithoutUsagesInput.schema';
import { GiftCardUncheckedCreateWithoutUsagesInputObjectSchema as GiftCardUncheckedCreateWithoutUsagesInputObjectSchema } from './GiftCardUncheckedCreateWithoutUsagesInput.schema';
import { GiftCardCreateOrConnectWithoutUsagesInputObjectSchema as GiftCardCreateOrConnectWithoutUsagesInputObjectSchema } from './GiftCardCreateOrConnectWithoutUsagesInput.schema';
import { GiftCardUpsertWithoutUsagesInputObjectSchema as GiftCardUpsertWithoutUsagesInputObjectSchema } from './GiftCardUpsertWithoutUsagesInput.schema';
import { GiftCardWhereUniqueInputObjectSchema as GiftCardWhereUniqueInputObjectSchema } from './GiftCardWhereUniqueInput.schema';
import { GiftCardUpdateToOneWithWhereWithoutUsagesInputObjectSchema as GiftCardUpdateToOneWithWhereWithoutUsagesInputObjectSchema } from './GiftCardUpdateToOneWithWhereWithoutUsagesInput.schema';
import { GiftCardUpdateWithoutUsagesInputObjectSchema as GiftCardUpdateWithoutUsagesInputObjectSchema } from './GiftCardUpdateWithoutUsagesInput.schema';
import { GiftCardUncheckedUpdateWithoutUsagesInputObjectSchema as GiftCardUncheckedUpdateWithoutUsagesInputObjectSchema } from './GiftCardUncheckedUpdateWithoutUsagesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GiftCardCreateWithoutUsagesInputObjectSchema), z.lazy(() => GiftCardUncheckedCreateWithoutUsagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GiftCardCreateOrConnectWithoutUsagesInputObjectSchema).optional(),
  upsert: z.lazy(() => GiftCardUpsertWithoutUsagesInputObjectSchema).optional(),
  connect: z.lazy(() => GiftCardWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => GiftCardUpdateToOneWithWhereWithoutUsagesInputObjectSchema), z.lazy(() => GiftCardUpdateWithoutUsagesInputObjectSchema), z.lazy(() => GiftCardUncheckedUpdateWithoutUsagesInputObjectSchema)]).optional()
}).strict();
export const GiftCardUpdateOneRequiredWithoutUsagesNestedInputObjectSchema: z.ZodType<Prisma.GiftCardUpdateOneRequiredWithoutUsagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUpdateOneRequiredWithoutUsagesNestedInput>;
export const GiftCardUpdateOneRequiredWithoutUsagesNestedInputObjectZodSchema = makeSchema();
