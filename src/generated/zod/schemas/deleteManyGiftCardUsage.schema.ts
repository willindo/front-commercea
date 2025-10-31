import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardUsageWhereInputObjectSchema as GiftCardUsageWhereInputObjectSchema } from './objects/GiftCardUsageWhereInput.schema';

export const GiftCardUsageDeleteManySchema: z.ZodType<Prisma.GiftCardUsageDeleteManyArgs> = z.object({ where: GiftCardUsageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GiftCardUsageDeleteManyArgs>;

export const GiftCardUsageDeleteManyZodSchema = z.object({ where: GiftCardUsageWhereInputObjectSchema.optional() }).strict();