import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardCreateWithoutUsagesInputObjectSchema as GiftCardCreateWithoutUsagesInputObjectSchema } from './GiftCardCreateWithoutUsagesInput.schema';
import { GiftCardUncheckedCreateWithoutUsagesInputObjectSchema as GiftCardUncheckedCreateWithoutUsagesInputObjectSchema } from './GiftCardUncheckedCreateWithoutUsagesInput.schema';
import { GiftCardCreateOrConnectWithoutUsagesInputObjectSchema as GiftCardCreateOrConnectWithoutUsagesInputObjectSchema } from './GiftCardCreateOrConnectWithoutUsagesInput.schema';
import { GiftCardWhereUniqueInputObjectSchema as GiftCardWhereUniqueInputObjectSchema } from './GiftCardWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GiftCardCreateWithoutUsagesInputObjectSchema), z.lazy(() => GiftCardUncheckedCreateWithoutUsagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GiftCardCreateOrConnectWithoutUsagesInputObjectSchema).optional(),
  connect: z.lazy(() => GiftCardWhereUniqueInputObjectSchema).optional()
}).strict();
export const GiftCardCreateNestedOneWithoutUsagesInputObjectSchema: z.ZodType<Prisma.GiftCardCreateNestedOneWithoutUsagesInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardCreateNestedOneWithoutUsagesInput>;
export const GiftCardCreateNestedOneWithoutUsagesInputObjectZodSchema = makeSchema();
