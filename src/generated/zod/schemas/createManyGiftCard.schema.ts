import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardCreateManyInputObjectSchema as GiftCardCreateManyInputObjectSchema } from './objects/GiftCardCreateManyInput.schema';

export const GiftCardCreateManySchema: z.ZodType<Prisma.GiftCardCreateManyArgs> = z.object({ data: z.union([ GiftCardCreateManyInputObjectSchema, z.array(GiftCardCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GiftCardCreateManyArgs>;

export const GiftCardCreateManyZodSchema = z.object({ data: z.union([ GiftCardCreateManyInputObjectSchema, z.array(GiftCardCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();