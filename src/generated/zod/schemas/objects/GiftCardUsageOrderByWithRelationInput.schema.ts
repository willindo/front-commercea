import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GiftCardOrderByWithRelationInputObjectSchema as GiftCardOrderByWithRelationInputObjectSchema } from './GiftCardOrderByWithRelationInput.schema';
import { OrderOrderByWithRelationInputObjectSchema as OrderOrderByWithRelationInputObjectSchema } from './OrderOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  giftCardId: SortOrderSchema.optional(),
  orderId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  amountUsed: SortOrderSchema.optional(),
  usedAt: SortOrderSchema.optional(),
  giftCard: z.lazy(() => GiftCardOrderByWithRelationInputObjectSchema).optional(),
  order: z.lazy(() => OrderOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const GiftCardUsageOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.GiftCardUsageOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUsageOrderByWithRelationInput>;
export const GiftCardUsageOrderByWithRelationInputObjectZodSchema = makeSchema();
