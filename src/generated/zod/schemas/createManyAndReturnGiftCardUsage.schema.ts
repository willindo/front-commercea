import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardUsageSelectObjectSchema as GiftCardUsageSelectObjectSchema } from './objects/GiftCardUsageSelect.schema';
import { GiftCardUsageCreateManyInputObjectSchema as GiftCardUsageCreateManyInputObjectSchema } from './objects/GiftCardUsageCreateManyInput.schema';

export const GiftCardUsageCreateManyAndReturnSchema: z.ZodType<Prisma.GiftCardUsageCreateManyAndReturnArgs> = z.object({ select: GiftCardUsageSelectObjectSchema.optional(), data: z.union([ GiftCardUsageCreateManyInputObjectSchema, z.array(GiftCardUsageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GiftCardUsageCreateManyAndReturnArgs>;

export const GiftCardUsageCreateManyAndReturnZodSchema = z.object({ select: GiftCardUsageSelectObjectSchema.optional(), data: z.union([ GiftCardUsageCreateManyInputObjectSchema, z.array(GiftCardUsageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();