import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardSelectObjectSchema as GiftCardSelectObjectSchema } from './objects/GiftCardSelect.schema';
import { GiftCardUpdateManyMutationInputObjectSchema as GiftCardUpdateManyMutationInputObjectSchema } from './objects/GiftCardUpdateManyMutationInput.schema';
import { GiftCardWhereInputObjectSchema as GiftCardWhereInputObjectSchema } from './objects/GiftCardWhereInput.schema';

export const GiftCardUpdateManyAndReturnSchema: z.ZodType<Prisma.GiftCardUpdateManyAndReturnArgs> = z.object({ select: GiftCardSelectObjectSchema.optional(), data: GiftCardUpdateManyMutationInputObjectSchema, where: GiftCardWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GiftCardUpdateManyAndReturnArgs>;

export const GiftCardUpdateManyAndReturnZodSchema = z.object({ select: GiftCardSelectObjectSchema.optional(), data: GiftCardUpdateManyMutationInputObjectSchema, where: GiftCardWhereInputObjectSchema.optional() }).strict();