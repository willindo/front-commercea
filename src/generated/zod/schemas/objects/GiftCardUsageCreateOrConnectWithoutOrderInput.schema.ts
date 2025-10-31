import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardUsageWhereUniqueInputObjectSchema as GiftCardUsageWhereUniqueInputObjectSchema } from './GiftCardUsageWhereUniqueInput.schema';
import { GiftCardUsageCreateWithoutOrderInputObjectSchema as GiftCardUsageCreateWithoutOrderInputObjectSchema } from './GiftCardUsageCreateWithoutOrderInput.schema';
import { GiftCardUsageUncheckedCreateWithoutOrderInputObjectSchema as GiftCardUsageUncheckedCreateWithoutOrderInputObjectSchema } from './GiftCardUsageUncheckedCreateWithoutOrderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GiftCardUsageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GiftCardUsageCreateWithoutOrderInputObjectSchema), z.lazy(() => GiftCardUsageUncheckedCreateWithoutOrderInputObjectSchema)])
}).strict();
export const GiftCardUsageCreateOrConnectWithoutOrderInputObjectSchema: z.ZodType<Prisma.GiftCardUsageCreateOrConnectWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageCreateOrConnectWithoutOrderInput>;
export const GiftCardUsageCreateOrConnectWithoutOrderInputObjectZodSchema = makeSchema();
