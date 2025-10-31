import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardWhereInputObjectSchema as GiftCardWhereInputObjectSchema } from './GiftCardWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => GiftCardWhereInputObjectSchema).optional(),
  some: z.lazy(() => GiftCardWhereInputObjectSchema).optional(),
  none: z.lazy(() => GiftCardWhereInputObjectSchema).optional()
}).strict();
export const GiftCardListRelationFilterObjectSchema: z.ZodType<Prisma.GiftCardListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardListRelationFilter>;
export const GiftCardListRelationFilterObjectZodSchema = makeSchema();
