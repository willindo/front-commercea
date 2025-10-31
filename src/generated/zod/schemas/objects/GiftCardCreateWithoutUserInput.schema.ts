import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardUsageCreateNestedManyWithoutGiftCardInputObjectSchema as GiftCardUsageCreateNestedManyWithoutGiftCardInputObjectSchema } from './GiftCardUsageCreateNestedManyWithoutGiftCardInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string(),
  balance: z.number(),
  isActive: z.boolean().optional(),
  issuedBy: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date().optional().nullable(),
  usages: z.lazy(() => GiftCardUsageCreateNestedManyWithoutGiftCardInputObjectSchema).optional()
}).strict();
export const GiftCardCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.GiftCardCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardCreateWithoutUserInput>;
export const GiftCardCreateWithoutUserInputObjectZodSchema = makeSchema();
