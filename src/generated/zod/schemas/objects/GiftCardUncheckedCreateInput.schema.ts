import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GiftCardUsageUncheckedCreateNestedManyWithoutGiftCardInputObjectSchema as GiftCardUsageUncheckedCreateNestedManyWithoutGiftCardInputObjectSchema } from './GiftCardUsageUncheckedCreateNestedManyWithoutGiftCardInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string(),
  userId: z.string().optional().nullable(),
  balance: z.number(),
  isActive: z.boolean().optional(),
  issuedBy: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date().optional().nullable(),
  usages: z.lazy(() => GiftCardUsageUncheckedCreateNestedManyWithoutGiftCardInputObjectSchema)
}).strict();
export const GiftCardUncheckedCreateInputObjectSchema: z.ZodType<Prisma.GiftCardUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardUncheckedCreateInput>;
export const GiftCardUncheckedCreateInputObjectZodSchema = makeSchema();
