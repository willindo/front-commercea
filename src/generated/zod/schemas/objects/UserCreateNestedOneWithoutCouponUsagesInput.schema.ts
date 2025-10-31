import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutCouponUsagesInputObjectSchema as UserCreateWithoutCouponUsagesInputObjectSchema } from './UserCreateWithoutCouponUsagesInput.schema';
import { UserUncheckedCreateWithoutCouponUsagesInputObjectSchema as UserUncheckedCreateWithoutCouponUsagesInputObjectSchema } from './UserUncheckedCreateWithoutCouponUsagesInput.schema';
import { UserCreateOrConnectWithoutCouponUsagesInputObjectSchema as UserCreateOrConnectWithoutCouponUsagesInputObjectSchema } from './UserCreateOrConnectWithoutCouponUsagesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCouponUsagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCouponUsagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCouponUsagesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutCouponUsagesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCouponUsagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutCouponUsagesInput>;
export const UserCreateNestedOneWithoutCouponUsagesInputObjectZodSchema = makeSchema();
