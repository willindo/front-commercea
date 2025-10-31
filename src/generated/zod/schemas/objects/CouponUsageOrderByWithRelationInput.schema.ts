import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CouponOrderByWithRelationInputObjectSchema as CouponOrderByWithRelationInputObjectSchema } from './CouponOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { OrderOrderByWithRelationInputObjectSchema as OrderOrderByWithRelationInputObjectSchema } from './OrderOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  couponId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  orderId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  usedAt: SortOrderSchema.optional(),
  coupon: z.lazy(() => CouponOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  order: z.lazy(() => OrderOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const CouponUsageOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CouponUsageOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponUsageOrderByWithRelationInput>;
export const CouponUsageOrderByWithRelationInputObjectZodSchema = makeSchema();
