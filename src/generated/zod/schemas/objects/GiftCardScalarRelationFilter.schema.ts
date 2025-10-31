import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardWhereInputObjectSchema as GiftCardWhereInputObjectSchema } from './GiftCardWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => GiftCardWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => GiftCardWhereInputObjectSchema).optional()
}).strict();
export const GiftCardScalarRelationFilterObjectSchema: z.ZodType<Prisma.GiftCardScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardScalarRelationFilter>;
export const GiftCardScalarRelationFilterObjectZodSchema = makeSchema();
