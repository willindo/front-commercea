import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PendingVerificationSelectObjectSchema as PendingVerificationSelectObjectSchema } from './PendingVerificationSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PendingVerificationSelectObjectSchema).optional()
}).strict();
export const PendingVerificationArgsObjectSchema = makeSchema();
export const PendingVerificationArgsObjectZodSchema = makeSchema();
