import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { GiftCardUsageOrderByRelationAggregateInputObjectSchema as GiftCardUsageOrderByRelationAggregateInputObjectSchema } from './GiftCardUsageOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  userId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  balance: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  issuedBy: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  expiresAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  usages: z.lazy(() => GiftCardUsageOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const GiftCardOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.GiftCardOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardOrderByWithRelationInput>;
export const GiftCardOrderByWithRelationInputObjectZodSchema = makeSchema();
