import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardUsageWhereInputObjectSchema as GiftCardUsageWhereInputObjectSchema } from './GiftCardUsageWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => GiftCardUsageWhereInputObjectSchema).optional(),
  some: z.lazy(() => GiftCardUsageWhereInputObjectSchema).optional(),
  none: z.lazy(() => GiftCardUsageWhereInputObjectSchema).optional()
}).strict();
export const GiftCardUsageListRelationFilterObjectSchema: z.ZodType<Prisma.GiftCardUsageListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageListRelationFilter>;
export const GiftCardUsageListRelationFilterObjectZodSchema = makeSchema();
