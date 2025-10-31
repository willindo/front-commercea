import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { GiftCardUsageFindManySchema as GiftCardUsageFindManySchema } from '../findManyGiftCardUsage.schema';
import { GiftCardCountOutputTypeArgsObjectSchema as GiftCardCountOutputTypeArgsObjectSchema } from './GiftCardCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  usages: z.union([z.boolean(), z.lazy(() => GiftCardUsageFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => GiftCardCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const GiftCardIncludeObjectSchema: z.ZodType<Prisma.GiftCardInclude> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardInclude>;
export const GiftCardIncludeObjectZodSchema = makeSchema();
