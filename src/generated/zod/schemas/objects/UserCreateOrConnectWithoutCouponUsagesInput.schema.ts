import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCouponUsagesInputObjectSchema as UserCreateWithoutCouponUsagesInputObjectSchema } from './UserCreateWithoutCouponUsagesInput.schema';
import { UserUncheckedCreateWithoutCouponUsagesInputObjectSchema as UserUncheckedCreateWithoutCouponUsagesInputObjectSchema } from './UserUncheckedCreateWithoutCouponUsagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCouponUsagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCouponUsagesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutCouponUsagesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCouponUsagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutCouponUsagesInput>;
export const UserCreateOrConnectWithoutCouponUsagesInputObjectZodSchema = makeSchema();
