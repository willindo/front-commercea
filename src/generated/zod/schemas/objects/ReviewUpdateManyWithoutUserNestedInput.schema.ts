import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCreateWithoutUserInputObjectSchema as ReviewCreateWithoutUserInputObjectSchema } from './ReviewCreateWithoutUserInput.schema';
import { ReviewUncheckedCreateWithoutUserInputObjectSchema as ReviewUncheckedCreateWithoutUserInputObjectSchema } from './ReviewUncheckedCreateWithoutUserInput.schema';
import { ReviewCreateOrConnectWithoutUserInputObjectSchema as ReviewCreateOrConnectWithoutUserInputObjectSchema } from './ReviewCreateOrConnectWithoutUserInput.schema';
import { ReviewUpsertWithWhereUniqueWithoutUserInputObjectSchema as ReviewUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ReviewUpsertWithWhereUniqueWithoutUserInput.schema';
import { ReviewCreateManyUserInputEnvelopeObjectSchema as ReviewCreateManyUserInputEnvelopeObjectSchema } from './ReviewCreateManyUserInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithWhereUniqueWithoutUserInputObjectSchema as ReviewUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ReviewUpdateWithWhereUniqueWithoutUserInput.schema';
import { ReviewUpdateManyWithWhereWithoutUserInputObjectSchema as ReviewUpdateManyWithWhereWithoutUserInputObjectSchema } from './ReviewUpdateManyWithWhereWithoutUserInput.schema';
import { ReviewScalarWhereInputObjectSchema as ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutUserInputObjectSchema), z.lazy(() => ReviewCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ReviewUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ReviewCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReviewUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ReviewUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReviewUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ReviewUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReviewUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => ReviewUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReviewScalarWhereInputObjectSchema), z.lazy(() => ReviewScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReviewUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.ReviewUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateManyWithoutUserNestedInput>;
export const ReviewUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
