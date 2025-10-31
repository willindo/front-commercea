import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardUsageSelectObjectSchema as GiftCardUsageSelectObjectSchema } from './objects/GiftCardUsageSelect.schema';
import { GiftCardUsageIncludeObjectSchema as GiftCardUsageIncludeObjectSchema } from './objects/GiftCardUsageInclude.schema';
import { GiftCardUsageWhereUniqueInputObjectSchema as GiftCardUsageWhereUniqueInputObjectSchema } from './objects/GiftCardUsageWhereUniqueInput.schema';

export const GiftCardUsageFindUniqueSchema: z.ZodType<Prisma.GiftCardUsageFindUniqueArgs> = z.object({ select: GiftCardUsageSelectObjectSchema.optional(), include: GiftCardUsageIncludeObjectSchema.optional(), where: GiftCardUsageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GiftCardUsageFindUniqueArgs>;

export const GiftCardUsageFindUniqueZodSchema = z.object({ select: GiftCardUsageSelectObjectSchema.optional(), include: GiftCardUsageIncludeObjectSchema.optional(), where: GiftCardUsageWhereUniqueInputObjectSchema }).strict();