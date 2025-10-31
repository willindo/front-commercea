import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardSelectObjectSchema as GiftCardSelectObjectSchema } from './objects/GiftCardSelect.schema';
import { GiftCardIncludeObjectSchema as GiftCardIncludeObjectSchema } from './objects/GiftCardInclude.schema';
import { GiftCardUpdateInputObjectSchema as GiftCardUpdateInputObjectSchema } from './objects/GiftCardUpdateInput.schema';
import { GiftCardUncheckedUpdateInputObjectSchema as GiftCardUncheckedUpdateInputObjectSchema } from './objects/GiftCardUncheckedUpdateInput.schema';
import { GiftCardWhereUniqueInputObjectSchema as GiftCardWhereUniqueInputObjectSchema } from './objects/GiftCardWhereUniqueInput.schema';

export const GiftCardUpdateOneSchema: z.ZodType<Prisma.GiftCardUpdateArgs> = z.object({ select: GiftCardSelectObjectSchema.optional(), include: GiftCardIncludeObjectSchema.optional(), data: z.union([GiftCardUpdateInputObjectSchema, GiftCardUncheckedUpdateInputObjectSchema]), where: GiftCardWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GiftCardUpdateArgs>;

export const GiftCardUpdateOneZodSchema = z.object({ select: GiftCardSelectObjectSchema.optional(), include: GiftCardIncludeObjectSchema.optional(), data: z.union([GiftCardUpdateInputObjectSchema, GiftCardUncheckedUpdateInputObjectSchema]), where: GiftCardWhereUniqueInputObjectSchema }).strict();