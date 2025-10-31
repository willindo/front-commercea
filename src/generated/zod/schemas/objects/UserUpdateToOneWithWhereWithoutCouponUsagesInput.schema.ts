import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCouponUsagesInputObjectSchema as UserUpdateWithoutCouponUsagesInputObjectSchema } from './UserUpdateWithoutCouponUsagesInput.schema';
import { UserUncheckedUpdateWithoutCouponUsagesInputObjectSchema as UserUncheckedUpdateWithoutCouponUsagesInputObjectSchema } from './UserUncheckedUpdateWithoutCouponUsagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCouponUsagesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCouponUsagesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutCouponUsagesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCouponUsagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCouponUsagesInput>;
export const UserUpdateToOneWithWhereWithoutCouponUsagesInputObjectZodSchema = makeSchema();
