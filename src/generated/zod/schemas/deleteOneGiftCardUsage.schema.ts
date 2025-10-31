import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardUsageSelectObjectSchema as GiftCardUsageSelectObjectSchema } from './objects/GiftCardUsageSelect.schema';
import { GiftCardUsageIncludeObjectSchema as GiftCardUsageIncludeObjectSchema } from './objects/GiftCardUsageInclude.schema';
import { GiftCardUsageWhereUniqueInputObjectSchema as GiftCardUsageWhereUniqueInputObjectSchema } from './objects/GiftCardUsageWhereUniqueInput.schema';

export const GiftCardUsageDeleteOneSchema: z.ZodType<Prisma.GiftCardUsageDeleteArgs> = z.object({ select: GiftCardUsageSelectObjectSchema.optional(), include: GiftCardUsageIncludeObjectSchema.optional(), where: GiftCardUsageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GiftCardUsageDeleteArgs>;

export const GiftCardUsageDeleteOneZodSchema = z.object({ select: GiftCardUsageSelectObjectSchema.optional(), include: GiftCardUsageIncludeObjectSchema.optional(), where: GiftCardUsageWhereUniqueInputObjectSchema }).strict();