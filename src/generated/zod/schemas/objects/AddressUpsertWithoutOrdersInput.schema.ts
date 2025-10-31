import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressUpdateWithoutOrdersInputObjectSchema as AddressUpdateWithoutOrdersInputObjectSchema } from './AddressUpdateWithoutOrdersInput.schema';
import { AddressUncheckedUpdateWithoutOrdersInputObjectSchema as AddressUncheckedUpdateWithoutOrdersInputObjectSchema } from './AddressUncheckedUpdateWithoutOrdersInput.schema';
import { AddressCreateWithoutOrdersInputObjectSchema as AddressCreateWithoutOrdersInputObjectSchema } from './AddressCreateWithoutOrdersInput.schema';
import { AddressUncheckedCreateWithoutOrdersInputObjectSchema as AddressUncheckedCreateWithoutOrdersInputObjectSchema } from './AddressUncheckedCreateWithoutOrdersInput.schema';
import { AddressWhereInputObjectSchema as AddressWhereInputObjectSchema } from './AddressWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AddressUpdateWithoutOrdersInputObjectSchema), z.lazy(() => AddressUncheckedUpdateWithoutOrdersInputObjectSchema)]),
  create: z.union([z.lazy(() => AddressCreateWithoutOrdersInputObjectSchema), z.lazy(() => AddressUncheckedCreateWithoutOrdersInputObjectSchema)]),
  where: z.lazy(() => AddressWhereInputObjectSchema).optional()
}).strict();
export const AddressUpsertWithoutOrdersInputObjectSchema: z.ZodType<Prisma.AddressUpsertWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUpsertWithoutOrdersInput>;
export const AddressUpsertWithoutOrdersInputObjectZodSchema = makeSchema();
