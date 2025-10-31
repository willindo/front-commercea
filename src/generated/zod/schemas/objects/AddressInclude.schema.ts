import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { OrderFindManySchema as OrderFindManySchema } from '../findManyOrder.schema';
import { AddressCountOutputTypeArgsObjectSchema as AddressCountOutputTypeArgsObjectSchema } from './AddressCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  orders: z.union([z.boolean(), z.lazy(() => OrderFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AddressCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AddressIncludeObjectSchema: z.ZodType<Prisma.AddressInclude> = makeSchema() as unknown as z.ZodType<Prisma.AddressInclude>;
export const AddressIncludeObjectZodSchema = makeSchema();
