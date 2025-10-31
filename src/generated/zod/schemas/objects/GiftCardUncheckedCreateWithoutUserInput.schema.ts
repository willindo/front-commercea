import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardUsageUncheckedCreateNestedManyWithoutGiftCardInputObjectSchema as GiftCardUsageUncheckedCreateNestedManyWithoutGiftCardInputObjectSchema } from './GiftCardUsageUncheckedCreateNestedManyWithoutGiftCardInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string(),
  balance: z.number(),
  isActive: z.boolean().optional(),
  issuedBy: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date().optional().nullable(),
  usages: z.lazy(() => GiftCardUsageUncheckedCreateNestedManyWithoutGiftCardInputObjectSchema).optional()
}).strict();
export const GiftCardUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.GiftCardUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUncheckedCreateWithoutUserInput>;
export const GiftCardUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
