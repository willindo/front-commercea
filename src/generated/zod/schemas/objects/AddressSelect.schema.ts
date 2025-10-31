import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { OrderFindManySchema as OrderFindManySchema } from '../findManyOrder.schema';
import { AddressCountOutputTypeArgsObjectSchema as AddressCountOutputTypeArgsObjectSchema } from './AddressCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  userId: z.boolean().optional(),
  line1: z.boolean().optional(),
  line2: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  postalCode: z.boolean().optional(),
  country: z.boolean().optional(),
  orders: z.union([z.boolean(), z.lazy(() => OrderFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AddressCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AddressSelectObjectSchema: z.ZodType<Prisma.AddressSelect> = makeSchema() as unknown as z.ZodType<Prisma.AddressSelect>;
export const AddressSelectObjectZodSchema = makeSchema();
