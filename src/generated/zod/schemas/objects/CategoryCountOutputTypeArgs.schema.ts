import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCountOutputTypeSelectObjectSchema as CategoryCountOutputTypeSelectObjectSchema } from './CategoryCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CategoryCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const CategoryCountOutputTypeArgsObjectSchema = makeSchema();
export const CategoryCountOutputTypeArgsObjectZodSchema = makeSchema();
