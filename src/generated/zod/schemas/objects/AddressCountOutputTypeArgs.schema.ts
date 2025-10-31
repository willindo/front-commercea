import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressCountOutputTypeSelectObjectSchema as AddressCountOutputTypeSelectObjectSchema } from './AddressCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AddressCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const AddressCountOutputTypeArgsObjectSchema = makeSchema();
export const AddressCountOutputTypeArgsObjectZodSchema = makeSchema();
