import * as z from 'zod';
import { GenderSchema } from '../enums/Gender.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumGenderNullableFilterObjectSchema as NestedEnumGenderNullableFilterObjectSchema } from './NestedEnumGenderNullableFilter.schema'

const nestedenumgendernullablewithaggregatesfilterSchema = z.object({
  equals: GenderSchema.optional().nullable(),
  in: GenderSchema.array().optional().nullable(),
  notIn: GenderSchema.array().optional().nullable(),
  not: z.union([GenderSchema, z.lazy(() => NestedEnumGenderNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumGenderNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumGenderNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumGenderNullableWithAggregatesFilterObjectSchema: z.ZodType<any> = nestedenumgendernullablewithaggregatesfilterSchema as unknown as z.ZodType<any>;
export const NestedEnumGenderNullableWithAggregatesFilterObjectZodSchema = nestedenumgendernullablewithaggregatesfilterSchema;
