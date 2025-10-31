import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardSelectObjectSchema as GiftCardSelectObjectSchema } from './objects/GiftCardSelect.schema';
import { GiftCardIncludeObjectSchema as GiftCardIncludeObjectSchema } from './objects/GiftCardInclude.schema';
import { GiftCardCreateInputObjectSchema as GiftCardCreateInputObjectSchema } from './objects/GiftCardCreateInput.schema';
import { GiftCardUncheckedCreateInputObjectSchema as GiftCardUncheckedCreateInputObjectSchema } from './objects/GiftCardUncheckedCreateInput.schema';

export const GiftCardCreateOneSchema: z.ZodType<Prisma.GiftCardCreateArgs> = z.object({ select: GiftCardSelectObjectSchema.optional(), include: GiftCardIncludeObjectSchema.optional(), data: z.union([GiftCardCreateInputObjectSchema, GiftCardUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.GiftCardCreateArgs>;

export const GiftCardCreateOneZodSchema = z.object({ select: GiftCardSelectObjectSchema.optional(), include: GiftCardIncludeObjectSchema.optional(), data: z.union([GiftCardCreateInputObjectSchema, GiftCardUncheckedCreateInputObjectSchema]) }).strict();