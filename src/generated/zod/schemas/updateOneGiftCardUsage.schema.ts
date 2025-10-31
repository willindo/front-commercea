import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardUsageSelectObjectSchema as GiftCardUsageSelectObjectSchema } from './objects/GiftCardUsageSelect.schema';
import { GiftCardUsageIncludeObjectSchema as GiftCardUsageIncludeObjectSchema } from './objects/GiftCardUsageInclude.schema';
import { GiftCardUsageUpdateInputObjectSchema as GiftCardUsageUpdateInputObjectSchema } from './objects/GiftCardUsageUpdateInput.schema';
import { GiftCardUsageUncheckedUpdateInputObjectSchema as GiftCardUsageUncheckedUpdateInputObjectSchema } from './objects/GiftCardUsageUncheckedUpdateInput.schema';
import { GiftCardUsageWhereUniqueInputObjectSchema as GiftCardUsageWhereUniqueInputObjectSchema } from './objects/GiftCardUsageWhereUniqueInput.schema';

export const GiftCardUsageUpdateOneSchema: z.ZodType<Prisma.GiftCardUsageUpdateArgs> = z.object({ select: GiftCardUsageSelectObjectSchema.optional(), include: GiftCardUsageIncludeObjectSchema.optional(), data: z.union([GiftCardUsageUpdateInputObjectSchema, GiftCardUsageUncheckedUpdateInputObjectSchema]), where: GiftCardUsageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GiftCardUsageUpdateArgs>;

export const GiftCardUsageUpdateOneZodSchema = z.object({ select: GiftCardUsageSelectObjectSchema.optional(), include: GiftCardUsageIncludeObjectSchema.optional(), data: z.union([GiftCardUsageUpdateInputObjectSchema, GiftCardUsageUncheckedUpdateInputObjectSchema]), where: GiftCardUsageWhereUniqueInputObjectSchema }).strict();