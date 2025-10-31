import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutCouponUsagesInputObjectSchema as UserUpdateWithoutCouponUsagesInputObjectSchema } from './UserUpdateWithoutCouponUsagesInput.schema';
import { UserUncheckedUpdateWithoutCouponUsagesInputObjectSchema as UserUncheckedUpdateWithoutCouponUsagesInputObjectSchema } from './UserUncheckedUpdateWithoutCouponUsagesInput.schema';
import { UserCreateWithoutCouponUsagesInputObjectSchema as UserCreateWithoutCouponUsagesInputObjectSchema } from './UserCreateWithoutCouponUsagesInput.schema';
import { UserUncheckedCreateWithoutCouponUsagesInputObjectSchema as UserUncheckedCreateWithoutCouponUsagesInputObjectSchema } from './UserUncheckedCreateWithoutCouponUsagesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCouponUsagesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCouponUsagesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCouponUsagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCouponUsagesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutCouponUsagesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutCouponUsagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutCouponUsagesInput>;
export const UserUpsertWithoutCouponUsagesInputObjectZodSchema = makeSchema();
