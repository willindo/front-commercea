import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardSelectObjectSchema as GiftCardSelectObjectSchema } from './objects/GiftCardSelect.schema';
import { GiftCardIncludeObjectSchema as GiftCardIncludeObjectSchema } from './objects/GiftCardInclude.schema';
import { GiftCardWhereUniqueInputObjectSchema as GiftCardWhereUniqueInputObjectSchema } from './objects/GiftCardWhereUniqueInput.schema';
import { GiftCardCreateInputObjectSchema as GiftCardCreateInputObjectSchema } from './objects/GiftCardCreateInput.schema';
import { GiftCardUncheckedCreateInputObjectSchema as GiftCardUncheckedCreateInputObjectSchema } from './objects/GiftCardUncheckedCreateInput.schema';
import { GiftCardUpdateInputObjectSchema as GiftCardUpdateInputObjectSchema } from './objects/GiftCardUpdateInput.schema';
import { GiftCardUncheckedUpdateInputObjectSchema as GiftCardUncheckedUpdateInputObjectSchema } from './objects/GiftCardUncheckedUpdateInput.schema';

export const GiftCardUpsertOneSchema: z.ZodType<Prisma.GiftCardUpsertArgs> = z.object({ select: GiftCardSelectObjectSchema.optional(), include: GiftCardIncludeObjectSchema.optional(), where: GiftCardWhereUniqueInputObjectSchema, create: z.union([ GiftCardCreateInputObjectSchema, GiftCardUncheckedCreateInputObjectSchema ]), update: z.union([ GiftCardUpdateInputObjectSchema, GiftCardUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.GiftCardUpsertArgs>;

export const GiftCardUpsertOneZodSchema = z.object({ select: GiftCardSelectObjectSchema.optional(), include: GiftCardIncludeObjectSchema.optional(), where: GiftCardWhereUniqueInputObjectSchema, create: z.union([ GiftCardCreateInputObjectSchema, GiftCardUncheckedCreateInputObjectSchema ]), update: z.union([ GiftCardUpdateInputObjectSchema, GiftCardUncheckedUpdateInputObjectSchema ]) }).strict();