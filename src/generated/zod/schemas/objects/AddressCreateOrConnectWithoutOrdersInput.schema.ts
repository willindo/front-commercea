import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressWhereUniqueInputObjectSchema as AddressWhereUniqueInputObjectSchema } from './AddressWhereUniqueInput.schema';
import { AddressCreateWithoutOrdersInputObjectSchema as AddressCreateWithoutOrdersInputObjectSchema } from './AddressCreateWithoutOrdersInput.schema';
import { AddressUncheckedCreateWithoutOrdersInputObjectSchema as AddressUncheckedCreateWithoutOrdersInputObjectSchema } from './AddressUncheckedCreateWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AddressWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AddressCreateWithoutOrdersInputObjectSchema), z.lazy(() => AddressUncheckedCreateWithoutOrdersInputObjectSchema)])
}).strict();
export const AddressCreateOrConnectWithoutOrdersInputObjectSchema: z.ZodType<Prisma.AddressCreateOrConnectWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateOrConnectWithoutOrdersInput>;
export const AddressCreateOrConnectWithoutOrdersInputObjectZodSchema = makeSchema();
