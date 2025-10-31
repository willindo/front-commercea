import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressCreateWithoutUserInputObjectSchema as AddressCreateWithoutUserInputObjectSchema } from './AddressCreateWithoutUserInput.schema';
import { AddressUncheckedCreateWithoutUserInputObjectSchema as AddressUncheckedCreateWithoutUserInputObjectSchema } from './AddressUncheckedCreateWithoutUserInput.schema';
import { AddressCreateOrConnectWithoutUserInputObjectSchema as AddressCreateOrConnectWithoutUserInputObjectSchema } from './AddressCreateOrConnectWithoutUserInput.schema';
import { AddressCreateManyUserInputEnvelopeObjectSchema as AddressCreateManyUserInputEnvelopeObjectSchema } from './AddressCreateManyUserInputEnvelope.schema';
import { AddressWhereUniqueInputObjectSchema as AddressWhereUniqueInputObjectSchema } from './AddressWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AddressCreateWithoutUserInputObjectSchema), z.lazy(() => AddressCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AddressUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AddressUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AddressCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => AddressCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AddressCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AddressWhereUniqueInputObjectSchema), z.lazy(() => AddressWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AddressCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.AddressCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateNestedManyWithoutUserInput>;
export const AddressCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
