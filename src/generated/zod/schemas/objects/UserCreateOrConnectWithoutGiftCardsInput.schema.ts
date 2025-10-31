import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutGiftCardsInputObjectSchema as UserCreateWithoutGiftCardsInputObjectSchema } from './UserCreateWithoutGiftCardsInput.schema';
import { UserUncheckedCreateWithoutGiftCardsInputObjectSchema as UserUncheckedCreateWithoutGiftCardsInputObjectSchema } from './UserUncheckedCreateWithoutGiftCardsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutGiftCardsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutGiftCardsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutGiftCardsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutGiftCardsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutGiftCardsInput>;
export const UserCreateOrConnectWithoutGiftCardsInputObjectZodSchema = makeSchema();
