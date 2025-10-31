import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string(),
  userId: z.string().optional().nullable(),
  balance: z.number(),
  isActive: z.boolean().optional(),
  issuedBy: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date().optional().nullable()
}).strict();
export const GiftCardCreateManyInputObjectSchema: z.ZodType<Prisma.GiftCardCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardCreateManyInput>;
export const GiftCardCreateManyInputObjectZodSchema = makeSchema();
