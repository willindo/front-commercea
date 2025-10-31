import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardUsageSelectObjectSchema as GiftCardUsageSelectObjectSchema } from './objects/GiftCardUsageSelect.schema';
import { GiftCardUsageIncludeObjectSchema as GiftCardUsageIncludeObjectSchema } from './objects/GiftCardUsageInclude.schema';
import { GiftCardUsageWhereUniqueInputObjectSchema as GiftCardUsageWhereUniqueInputObjectSchema } from './objects/GiftCardUsageWhereUniqueInput.schema';
import { GiftCardUsageCreateInputObjectSchema as GiftCardUsageCreateInputObjectSchema } from './objects/GiftCardUsageCreateInput.schema';
import { GiftCardUsageUncheckedCreateInputObjectSchema as GiftCardUsageUncheckedCreateInputObjectSchema } from './objects/GiftCardUsageUncheckedCreateInput.schema';
import { GiftCardUsageUpdateInputObjectSchema as GiftCardUsageUpdateInputObjectSchema } from './objects/GiftCardUsageUpdateInput.schema';
import { GiftCardUsageUncheckedUpdateInputObjectSchema as GiftCardUsageUncheckedUpdateInputObjectSchema } from './objects/GiftCardUsageUncheckedUpdateInput.schema';

export const GiftCardUsageUpsertOneSchema: z.ZodType<Prisma.GiftCardUsageUpsertArgs> = z.object({ select: GiftCardUsageSelectObjectSchema.optional(), include: GiftCardUsageIncludeObjectSchema.optional(), where: GiftCardUsageWhereUniqueInputObjectSchema, create: z.union([ GiftCardUsageCreateInputObjectSchema, GiftCardUsageUncheckedCreateInputObjectSchema ]), update: z.union([ GiftCardUsageUpdateInputObjectSchema, GiftCardUsageUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.GiftCardUsageUpsertArgs>;

export const GiftCardUsageUpsertOneZodSchema = z.object({ select: GiftCardUsageSelectObjectSchema.optional(), include: GiftCardUsageIncludeObjectSchema.optional(), where: GiftCardUsageWhereUniqueInputObjectSchema, create: z.union([ GiftCardUsageCreateInputObjectSchema, GiftCardUsageUncheckedCreateInputObjectSchema ]), update: z.union([ GiftCardUsageUpdateInputObjectSchema, GiftCardUsageUncheckedUpdateInputObjectSchema ]) }).strict();