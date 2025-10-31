import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardSelectObjectSchema as GiftCardSelectObjectSchema } from './objects/GiftCardSelect.schema';
import { GiftCardCreateManyInputObjectSchema as GiftCardCreateManyInputObjectSchema } from './objects/GiftCardCreateManyInput.schema';

export const GiftCardCreateManyAndReturnSchema: z.ZodType<Prisma.GiftCardCreateManyAndReturnArgs> = z.object({ select: GiftCardSelectObjectSchema.optional(), data: z.union([ GiftCardCreateManyInputObjectSchema, z.array(GiftCardCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GiftCardCreateManyAndReturnArgs>;

export const GiftCardCreateManyAndReturnZodSchema = z.object({ select: GiftCardSelectObjectSchema.optional(), data: z.union([ GiftCardCreateManyInputObjectSchema, z.array(GiftCardCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();