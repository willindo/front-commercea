import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardUsageScalarWhereInputObjectSchema as GiftCardUsageScalarWhereInputObjectSchema } from './GiftCardUsageScalarWhereInput.schema';
import { GiftCardUsageUpdateManyMutationInputObjectSchema as GiftCardUsageUpdateManyMutationInputObjectSchema } from './GiftCardUsageUpdateManyMutationInput.schema';
import { GiftCardUsageUncheckedUpdateManyWithoutOrderInputObjectSchema as GiftCardUsageUncheckedUpdateManyWithoutOrderInputObjectSchema } from './GiftCardUsageUncheckedUpdateManyWithoutOrderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GiftCardUsageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => GiftCardUsageUpdateManyMutationInputObjectSchema), z.lazy(() => GiftCardUsageUncheckedUpdateManyWithoutOrderInputObjectSchema)])
}).strict();
export const GiftCardUsageUpdateManyWithWhereWithoutOrderInputObjectSchema: z.ZodType<Prisma.GiftCardUsageUpdateManyWithWhereWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageUpdateManyWithWhereWithoutOrderInput>;
export const GiftCardUsageUpdateManyWithWhereWithoutOrderInputObjectZodSchema = makeSchema();
