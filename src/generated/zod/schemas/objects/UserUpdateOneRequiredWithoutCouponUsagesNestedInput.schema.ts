import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutCouponUsagesInputObjectSchema as UserCreateWithoutCouponUsagesInputObjectSchema } from './UserCreateWithoutCouponUsagesInput.schema';
import { UserUncheckedCreateWithoutCouponUsagesInputObjectSchema as UserUncheckedCreateWithoutCouponUsagesInputObjectSchema } from './UserUncheckedCreateWithoutCouponUsagesInput.schema';
import { UserCreateOrConnectWithoutCouponUsagesInputObjectSchema as UserCreateOrConnectWithoutCouponUsagesInputObjectSchema } from './UserCreateOrConnectWithoutCouponUsagesInput.schema';
import { UserUpsertWithoutCouponUsagesInputObjectSchema as UserUpsertWithoutCouponUsagesInputObjectSchema } from './UserUpsertWithoutCouponUsagesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCouponUsagesInputObjectSchema as UserUpdateToOneWithWhereWithoutCouponUsagesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCouponUsagesInput.schema';
import { UserUpdateWithoutCouponUsagesInputObjectSchema as UserUpdateWithoutCouponUsagesInputObjectSchema } from './UserUpdateWithoutCouponUsagesInput.schema';
import { UserUncheckedUpdateWithoutCouponUsagesInputObjectSchema as UserUncheckedUpdateWithoutCouponUsagesInputObjectSchema } from './UserUncheckedUpdateWithoutCouponUsagesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCouponUsagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCouponUsagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCouponUsagesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCouponUsagesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCouponUsagesInputObjectSchema), z.lazy(() => UserUpdateWithoutCouponUsagesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCouponUsagesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutCouponUsagesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCouponUsagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutCouponUsagesNestedInput>;
export const UserUpdateOneRequiredWithoutCouponUsagesNestedInputObjectZodSchema = makeSchema();
