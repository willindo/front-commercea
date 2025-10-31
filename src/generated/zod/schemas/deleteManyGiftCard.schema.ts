import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardWhereInputObjectSchema as GiftCardWhereInputObjectSchema } from './objects/GiftCardWhereInput.schema';

export const GiftCardDeleteManySchema: z.ZodType<Prisma.GiftCardDeleteManyArgs> = z.object({ where: GiftCardWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GiftCardDeleteManyArgs>;

export const GiftCardDeleteManyZodSchema = z.object({ where: GiftCardWhereInputObjectSchema.optional() }).strict();