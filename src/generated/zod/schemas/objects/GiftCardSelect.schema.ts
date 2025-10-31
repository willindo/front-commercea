import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { GiftCardUsageFindManySchema as GiftCardUsageFindManySchema } from '../findManyGiftCardUsage.schema';
import { GiftCardCountOutputTypeArgsObjectSchema as GiftCardCountOutputTypeArgsObjectSchema } from './GiftCardCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  userId: z.boolean().optional(),
  balance: z.boolean().optional(),
  isActive: z.boolean().optional(),
  issuedBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  usages: z.union([z.boolean(), z.lazy(() => GiftCardUsageFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => GiftCardCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const GiftCardSelectObjectSchema: z.ZodType<Prisma.GiftCardSelect> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardSelect>;
export const GiftCardSelectObjectZodSchema = makeSchema();
