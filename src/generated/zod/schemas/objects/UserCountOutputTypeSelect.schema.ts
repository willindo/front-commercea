import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  addresses: z.boolean().optional(),
  orders: z.boolean().optional(),
  payments: z.boolean().optional(),
  wishlists: z.boolean().optional(),
  reviews: z.boolean().optional(),
  giftCards: z.boolean().optional(),
  couponUsages: z.boolean().optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
