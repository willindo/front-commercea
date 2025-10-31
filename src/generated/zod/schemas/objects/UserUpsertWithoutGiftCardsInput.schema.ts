import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutGiftCardsInputObjectSchema as UserUpdateWithoutGiftCardsInputObjectSchema } from './UserUpdateWithoutGiftCardsInput.schema';
import { UserUncheckedUpdateWithoutGiftCardsInputObjectSchema as UserUncheckedUpdateWithoutGiftCardsInputObjectSchema } from './UserUncheckedUpdateWithoutGiftCardsInput.schema';
import { UserCreateWithoutGiftCardsInputObjectSchema as UserCreateWithoutGiftCardsInputObjectSchema } from './UserCreateWithoutGiftCardsInput.schema';
import { UserUncheckedCreateWithoutGiftCardsInputObjectSchema as UserUncheckedCreateWithoutGiftCardsInputObjectSchema } from './UserUncheckedCreateWithoutGiftCardsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutGiftCardsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutGiftCardsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutGiftCardsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutGiftCardsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutGiftCardsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutGiftCardsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutGiftCardsInput>;
export const UserUpsertWithoutGiftCardsInputObjectZodSchema = makeSchema();
