import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutGiftCardsInputObjectSchema as UserUpdateWithoutGiftCardsInputObjectSchema } from './UserUpdateWithoutGiftCardsInput.schema';
import { UserUncheckedUpdateWithoutGiftCardsInputObjectSchema as UserUncheckedUpdateWithoutGiftCardsInputObjectSchema } from './UserUncheckedUpdateWithoutGiftCardsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutGiftCardsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutGiftCardsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutGiftCardsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutGiftCardsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutGiftCardsInput>;
export const UserUpdateToOneWithWhereWithoutGiftCardsInputObjectZodSchema = makeSchema();
