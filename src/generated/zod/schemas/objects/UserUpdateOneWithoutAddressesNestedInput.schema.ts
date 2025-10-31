import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutAddressesInputObjectSchema as UserCreateWithoutAddressesInputObjectSchema } from './UserCreateWithoutAddressesInput.schema';
import { UserUncheckedCreateWithoutAddressesInputObjectSchema as UserUncheckedCreateWithoutAddressesInputObjectSchema } from './UserUncheckedCreateWithoutAddressesInput.schema';
import { UserCreateOrConnectWithoutAddressesInputObjectSchema as UserCreateOrConnectWithoutAddressesInputObjectSchema } from './UserCreateOrConnectWithoutAddressesInput.schema';
import { UserUpsertWithoutAddressesInputObjectSchema as UserUpsertWithoutAddressesInputObjectSchema } from './UserUpsertWithoutAddressesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutAddressesInputObjectSchema as UserUpdateToOneWithWhereWithoutAddressesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutAddressesInput.schema';
import { UserUpdateWithoutAddressesInputObjectSchema as UserUpdateWithoutAddressesInputObjectSchema } from './UserUpdateWithoutAddressesInput.schema';
import { UserUncheckedUpdateWithoutAddressesInputObjectSchema as UserUncheckedUpdateWithoutAddressesInputObjectSchema } from './UserUncheckedUpdateWithoutAddressesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAddressesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAddressesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAddressesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAddressesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutAddressesInputObjectSchema), z.lazy(() => UserUpdateWithoutAddressesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAddressesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutAddressesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutAddressesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutAddressesNestedInput>;
export const UserUpdateOneWithoutAddressesNestedInputObjectZodSchema = makeSchema();
