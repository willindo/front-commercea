import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutGiftCardsInputObjectSchema as UserCreateNestedOneWithoutGiftCardsInputObjectSchema } from './UserCreateNestedOneWithoutGiftCardsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string(),
  balance: z.number(),
  isActive: z.boolean().optional(),
  issuedBy: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutGiftCardsInputObjectSchema).optional()
}).strict();
export const GiftCardCreateWithoutUsagesInputObjectSchema: z.ZodType<Prisma.GiftCardCreateWithoutUsagesInput> = makeSchema() as unknown as z.ZodType<Prisma.GiftCardCreateWithoutUsagesInput>;
export const GiftCardCreateWithoutUsagesInputObjectZodSchema = makeSchema();
