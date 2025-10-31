import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutGiftCardsInputObjectSchema as UserCreateWithoutGiftCardsInputObjectSchema } from './UserCreateWithoutGiftCardsInput.schema';
import { UserUncheckedCreateWithoutGiftCardsInputObjectSchema as UserUncheckedCreateWithoutGiftCardsInputObjectSchema } from './UserUncheckedCreateWithoutGiftCardsInput.schema';
import { UserCreateOrConnectWithoutGiftCardsInputObjectSchema as UserCreateOrConnectWithoutGiftCardsInputObjectSchema } from './UserCreateOrConnectWithoutGiftCardsInput.schema';
import { UserUpsertWithoutGiftCardsInputObjectSchema as UserUpsertWithoutGiftCardsInputObjectSchema } from './UserUpsertWithoutGiftCardsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutGiftCardsInputObjectSchema as UserUpdateToOneWithWhereWithoutGiftCardsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutGiftCardsInput.schema';
import { UserUpdateWithoutGiftCardsInputObjectSchema as UserUpdateWithoutGiftCardsInputObjectSchema } from './UserUpdateWithoutGiftCardsInput.schema';
import { UserUncheckedUpdateWithoutGiftCardsInputObjectSchema as UserUncheckedUpdateWithoutGiftCardsInputObjectSchema } from './UserUncheckedUpdateWithoutGiftCardsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutGiftCardsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutGiftCardsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutGiftCardsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutGiftCardsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutGiftCardsInputObjectSchema), z.lazy(() => UserUpdateWithoutGiftCardsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutGiftCardsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutGiftCardsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutGiftCardsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutGiftCardsNestedInput>;
export const UserUpdateOneWithoutGiftCardsNestedInputObjectZodSchema = makeSchema();
