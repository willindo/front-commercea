import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardUsageSelectObjectSchema as GiftCardUsageSelectObjectSchema } from './objects/GiftCardUsageSelect.schema';
import { GiftCardUsageIncludeObjectSchema as GiftCardUsageIncludeObjectSchema } from './objects/GiftCardUsageInclude.schema';
import { GiftCardUsageCreateInputObjectSchema as GiftCardUsageCreateInputObjectSchema } from './objects/GiftCardUsageCreateInput.schema';
import { GiftCardUsageUncheckedCreateInputObjectSchema as GiftCardUsageUncheckedCreateInputObjectSchema } from './objects/GiftCardUsageUncheckedCreateInput.schema';

export const GiftCardUsageCreateOneSchema: z.ZodType<Prisma.GiftCardUsageCreateArgs> = z.object({ select: GiftCardUsageSelectObjectSchema.optional(), include: GiftCardUsageIncludeObjectSchema.optional(), data: z.union([GiftCardUsageCreateInputObjectSchema, GiftCardUsageUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.GiftCardUsageCreateArgs>;

export const GiftCardUsageCreateOneZodSchema = z.object({ select: GiftCardUsageSelectObjectSchema.optional(), include: GiftCardUsageIncludeObjectSchema.optional(), data: z.union([GiftCardUsageCreateInputObjectSchema, GiftCardUsageUncheckedCreateInputObjectSchema]) }).strict();