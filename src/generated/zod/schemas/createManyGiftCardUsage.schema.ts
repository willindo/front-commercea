import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardUsageCreateManyInputObjectSchema as GiftCardUsageCreateManyInputObjectSchema } from './objects/GiftCardUsageCreateManyInput.schema';

export const GiftCardUsageCreateManySchema: z.ZodType<Prisma.GiftCardUsageCreateManyArgs> = z.object({ data: z.union([ GiftCardUsageCreateManyInputObjectSchema, z.array(GiftCardUsageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GiftCardUsageCreateManyArgs>;

export const GiftCardUsageCreateManyZodSchema = z.object({ data: z.union([ GiftCardUsageCreateManyInputObjectSchema, z.array(GiftCardUsageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();