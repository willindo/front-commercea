import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardUpdateManyMutationInputObjectSchema as GiftCardUpdateManyMutationInputObjectSchema } from './objects/GiftCardUpdateManyMutationInput.schema';
import { GiftCardWhereInputObjectSchema as GiftCardWhereInputObjectSchema } from './objects/GiftCardWhereInput.schema';

export const GiftCardUpdateManySchema: z.ZodType<Prisma.GiftCardUpdateManyArgs> = z.object({ data: GiftCardUpdateManyMutationInputObjectSchema, where: GiftCardWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GiftCardUpdateManyArgs>;

export const GiftCardUpdateManyZodSchema = z.object({ data: GiftCardUpdateManyMutationInputObjectSchema, where: GiftCardWhereInputObjectSchema.optional() }).strict();