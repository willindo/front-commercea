import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutGiftCardsInputObjectSchema as UserCreateWithoutGiftCardsInputObjectSchema } from './UserCreateWithoutGiftCardsInput.schema';
import { UserUncheckedCreateWithoutGiftCardsInputObjectSchema as UserUncheckedCreateWithoutGiftCardsInputObjectSchema } from './UserUncheckedCreateWithoutGiftCardsInput.schema';
import { UserCreateOrConnectWithoutGiftCardsInputObjectSchema as UserCreateOrConnectWithoutGiftCardsInputObjectSchema } from './UserCreateOrConnectWithoutGiftCardsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutGiftCardsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutGiftCardsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutGiftCardsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutGiftCardsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutGiftCardsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutGiftCardsInput>;
export const UserCreateNestedOneWithoutGiftCardsInputObjectZodSchema = makeSchema();
