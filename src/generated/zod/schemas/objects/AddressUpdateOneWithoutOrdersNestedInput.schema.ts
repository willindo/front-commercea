import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressCreateWithoutOrdersInputObjectSchema as AddressCreateWithoutOrdersInputObjectSchema } from './AddressCreateWithoutOrdersInput.schema';
import { AddressUncheckedCreateWithoutOrdersInputObjectSchema as AddressUncheckedCreateWithoutOrdersInputObjectSchema } from './AddressUncheckedCreateWithoutOrdersInput.schema';
import { AddressCreateOrConnectWithoutOrdersInputObjectSchema as AddressCreateOrConnectWithoutOrdersInputObjectSchema } from './AddressCreateOrConnectWithoutOrdersInput.schema';
import { AddressUpsertWithoutOrdersInputObjectSchema as AddressUpsertWithoutOrdersInputObjectSchema } from './AddressUpsertWithoutOrdersInput.schema';
import { AddressWhereInputObjectSchema as AddressWhereInputObjectSchema } from './AddressWhereInput.schema';
import { AddressWhereUniqueInputObjectSchema as AddressWhereUniqueInputObjectSchema } from './AddressWhereUniqueInput.schema';
import { AddressUpdateToOneWithWhereWithoutOrdersInputObjectSchema as AddressUpdateToOneWithWhereWithoutOrdersInputObjectSchema } from './AddressUpdateToOneWithWhereWithoutOrdersInput.schema';
import { AddressUpdateWithoutOrdersInputObjectSchema as AddressUpdateWithoutOrdersInputObjectSchema } from './AddressUpdateWithoutOrdersInput.schema';
import { AddressUncheckedUpdateWithoutOrdersInputObjectSchema as AddressUncheckedUpdateWithoutOrdersInputObjectSchema } from './AddressUncheckedUpdateWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AddressCreateWithoutOrdersInputObjectSchema), z.lazy(() => AddressUncheckedCreateWithoutOrdersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutOrdersInputObjectSchema).optional(),
  upsert: z.lazy(() => AddressUpsertWithoutOrdersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => AddressWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => AddressWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AddressUpdateToOneWithWhereWithoutOrdersInputObjectSchema), z.lazy(() => AddressUpdateWithoutOrdersInputObjectSchema), z.lazy(() => AddressUncheckedUpdateWithoutOrdersInputObjectSchema)]).optional()
}).strict();
export const AddressUpdateOneWithoutOrdersNestedInputObjectSchema: z.ZodType<Prisma.AddressUpdateOneWithoutOrdersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUpdateOneWithoutOrdersNestedInput>;
export const AddressUpdateOneWithoutOrdersNestedInputObjectZodSchema = makeSchema();
