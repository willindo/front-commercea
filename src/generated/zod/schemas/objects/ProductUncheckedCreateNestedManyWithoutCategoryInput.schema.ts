import * as z from 'zod';
import { ProductCreateWithoutCategoryInputObjectSchema as ProductCreateWithoutCategoryInputObjectSchema } from './ProductCreateWithoutCategoryInput.schema';
import { ProductUncheckedCreateWithoutCategoryInputObjectSchema as ProductUncheckedCreateWithoutCategoryInputObjectSchema } from './ProductUncheckedCreateWithoutCategoryInput.schema';
import { ProductCreateOrConnectWithoutCategoryInputObjectSchema as ProductCreateOrConnectWithoutCategoryInputObjectSchema } from './ProductCreateOrConnectWithoutCategoryInput.schema';
import { ProductCreateManyCategoryInputEnvelopeObjectSchema as ProductCreateManyCategoryInputEnvelopeObjectSchema } from './ProductCreateManyCategoryInputEnvelope.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutCategoryInputObjectSchema), z.lazy(() => ProductCreateWithoutCategoryInputObjectSchema).array(), z.lazy(() => ProductUncheckedCreateWithoutCategoryInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProductCreateOrConnectWithoutCategoryInputObjectSchema), z.lazy(() => ProductCreateOrConnectWithoutCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProductCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema), z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProductUncheckedCreateNestedManyWithoutCategoryInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductUncheckedCreateNestedManyWithoutCategoryInputObjectZodSchema = makeSchema();
