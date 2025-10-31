import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressWhereInputObjectSchema as AddressWhereInputObjectSchema } from './AddressWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AddressWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => AddressWhereInputObjectSchema).optional().nullable()
}).strict();
export const AddressNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.AddressNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AddressNullableScalarRelationFilter>;
export const AddressNullableScalarRelationFilterObjectZodSchema = makeSchema();
