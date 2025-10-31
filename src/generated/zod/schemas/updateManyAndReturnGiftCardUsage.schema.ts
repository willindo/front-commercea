import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardUsageSelectObjectSchema as GiftCardUsageSelectObjectSchema } from './objects/GiftCardUsageSelect.schema';
import { GiftCardUsageUpdateManyMutationInputObjectSchema as GiftCardUsageUpdateManyMutationInputObjectSchema } from './objects/GiftCardUsageUpdateManyMutationInput.schema';
import { GiftCardUsageWhereInputObjectSchema as GiftCardUsageWhereInputObjectSchema } from './objects/GiftCardUsageWhereInput.schema';

export const GiftCardUsageUpdateManyAndReturnSchema: z.ZodType<Prisma.GiftCardUsageUpdateManyAndReturnArgs> = z.object({ select: GiftCardUsageSelectObjectSchema.optional(), data: GiftCardUsageUpdateManyMutationInputObjectSchema, where: GiftCardUsageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GiftCardUsageUpdateManyAndReturnArgs>;

export const GiftCardUsageUpdateManyAndReturnZodSchema = z.object({ select: GiftCardUsageSelectObjectSchema.optional(), data: GiftCardUsageUpdateManyMutationInputObjectSchema, where: GiftCardUsageWhereInputObjectSchema.optional() }).strict();