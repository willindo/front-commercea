import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductCreateWithoutCategoryInputObjectSchema as ProductCreateWithoutCategoryInputObjectSchema } from './ProductCreateWithoutCategoryInput.schema';
import { ProductUncheckedCreateWithoutCategoryInputObjectSchema as ProductUncheckedCreateWithoutCategoryInputObjectSchema } from './ProductUncheckedCreateWithoutCategoryInput.schema';
import { ProductCreateOrConnectWithoutCategoryInputObjectSchema as ProductCreateOrConnectWithoutCategoryInputObjectSchema } from './ProductCreateOrConnectWithoutCategoryInput.schema';
import { ProductUpsertWithWhereUniqueWithoutCategoryInputObjectSchema as ProductUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './ProductUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { ProductCreateManyCategoryInputEnvelopeObjectSchema as ProductCreateManyCategoryInputEnvelopeObjectSchema } from './ProductCreateManyCategoryInputEnvelope.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithWhereUniqueWithoutCategoryInputObjectSchema as ProductUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './ProductUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { ProductUpdateManyWithWhereWithoutCategoryInputObjectSchema as ProductUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './ProductUpdateManyWithWhereWithoutCategoryInput.schema';
import { ProductScalarWhereInputObjectSchema as ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutCategoryInputObjectSchema), z.lazy(() => ProductCreateWithoutCategoryInputObjectSchema).array(), z.lazy(() => ProductUncheckedCreateWithoutCategoryInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProductCreateOrConnectWithoutCategoryInputObjectSchema), z.lazy(() => ProductCreateOrConnectWithoutCategoryInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProductUpsertWithWhereUniqueWithoutCategoryInputObjectSchema), z.lazy(() => ProductUpsertWithWhereUniqueWithoutCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProductCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema), z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema), z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema), z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema), z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProductUpdateWithWhereUniqueWithoutCategoryInputObjectSchema), z.lazy(() => ProductUpdateWithWhereUniqueWithoutCategoryInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProductUpdateManyWithWhereWithoutCategoryInputObjectSchema), z.lazy(() => ProductUpdateManyWithWhereWithoutCategoryInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProductScalarWhereInputObjectSchema), z.lazy(() => ProductScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProductUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutCategoryNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutCategoryNestedInput>;
export const ProductUncheckedUpdateManyWithoutCategoryNestedInputObjectZodSchema = makeSchema();
