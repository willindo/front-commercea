import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  usages: z.boolean().optional()
}).strict();
export const GiftCardCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.GiftCardCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardCountOutputTypeSelect>;
export const GiftCardCountOutputTypeSelectObjectZodSchema = makeSchema();
