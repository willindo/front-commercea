import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardUsageScalarWhereInputObjectSchema as GiftCardUsageScalarWhereInputObjectSchema } from './GiftCardUsageScalarWhereInput.schema';
import { GiftCardUsageUpdateManyMutationInputObjectSchema as GiftCardUsageUpdateManyMutationInputObjectSchema } from './GiftCardUsageUpdateManyMutationInput.schema';
import { GiftCardUsageUncheckedUpdateManyWithoutGiftCardInputObjectSchema as GiftCardUsageUncheckedUpdateManyWithoutGiftCardInputObjectSchema } from './GiftCardUsageUncheckedUpdateManyWithoutGiftCardInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GiftCardUsageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => GiftCardUsageUpdateManyMutationInputObjectSchema), z.lazy(() => GiftCardUsageUncheckedUpdateManyWithoutGiftCardInputObjectSchema)])
}).strict();
export const GiftCardUsageUpdateManyWithWhereWithoutGiftCardInputObjectSchema: z.ZodType<Prisma.GiftCardUsageUpdateManyWithWhereWithoutGiftCardInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageUpdateManyWithWhereWithoutGiftCardInput>;
export const GiftCardUsageUpdateManyWithWhereWithoutGiftCardInputObjectZodSchema = makeSchema();
