import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressCreateWithoutOrdersInputObjectSchema as AddressCreateWithoutOrdersInputObjectSchema } from './AddressCreateWithoutOrdersInput.schema';
import { AddressUncheckedCreateWithoutOrdersInputObjectSchema as AddressUncheckedCreateWithoutOrdersInputObjectSchema } from './AddressUncheckedCreateWithoutOrdersInput.schema';
import { AddressCreateOrConnectWithoutOrdersInputObjectSchema as AddressCreateOrConnectWithoutOrdersInputObjectSchema } from './AddressCreateOrConnectWithoutOrdersInput.schema';
import { AddressWhereUniqueInputObjectSchema as AddressWhereUniqueInputObjectSchema } from './AddressWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AddressCreateWithoutOrdersInputObjectSchema), z.lazy(() => AddressUncheckedCreateWithoutOrdersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutOrdersInputObjectSchema).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputObjectSchema).optional()
}).strict();
export const AddressCreateNestedOneWithoutOrdersInputObjectSchema: z.ZodType<Prisma.AddressCreateNestedOneWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateNestedOneWithoutOrdersInput>;
export const AddressCreateNestedOneWithoutOrdersInputObjectZodSchema = makeSchema();
