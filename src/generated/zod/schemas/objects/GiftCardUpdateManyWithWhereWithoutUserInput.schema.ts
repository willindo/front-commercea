import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardScalarWhereInputObjectSchema as GiftCardScalarWhereInputObjectSchema } from './GiftCardScalarWhereInput.schema';
import { GiftCardUpdateManyMutationInputObjectSchema as GiftCardUpdateManyMutationInputObjectSchema } from './GiftCardUpdateManyMutationInput.schema';
import { GiftCardUncheckedUpdateManyWithoutUserInputObjectSchema as GiftCardUncheckedUpdateManyWithoutUserInputObjectSchema } from './GiftCardUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GiftCardScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => GiftCardUpdateManyMutationInputObjectSchema), z.lazy(() => GiftCardUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const GiftCardUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.GiftCardUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUpdateManyWithWhereWithoutUserInput>;
export const GiftCardUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
