import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardSelectObjectSchema as GiftCardSelectObjectSchema } from './objects/GiftCardSelect.schema';
import { GiftCardIncludeObjectSchema as GiftCardIncludeObjectSchema } from './objects/GiftCardInclude.schema';
import { GiftCardWhereUniqueInputObjectSchema as GiftCardWhereUniqueInputObjectSchema } from './objects/GiftCardWhereUniqueInput.schema';

export const GiftCardDeleteOneSchema: z.ZodType<Prisma.GiftCardDeleteArgs> = z.object({ select: GiftCardSelectObjectSchema.optional(), include: GiftCardIncludeObjectSchema.optional(), where: GiftCardWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GiftCardDeleteArgs>;

export const GiftCardDeleteOneZodSchema = z.object({ select: GiftCardSelectObjectSchema.optional(), include: GiftCardIncludeObjectSchema.optional(), where: GiftCardWhereUniqueInputObjectSchema }).strict();