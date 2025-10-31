import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardUsageUpdateManyMutationInputObjectSchema as GiftCardUsageUpdateManyMutationInputObjectSchema } from './objects/GiftCardUsageUpdateManyMutationInput.schema';
import { GiftCardUsageWhereInputObjectSchema as GiftCardUsageWhereInputObjectSchema } from './objects/GiftCardUsageWhereInput.schema';

export const GiftCardUsageUpdateManySchema: z.ZodType<Prisma.GiftCardUsageUpdateManyArgs> = z.object({ data: GiftCardUsageUpdateManyMutationInputObjectSchema, where: GiftCardUsageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GiftCardUsageUpdateManyArgs>;

export const GiftCardUsageUpdateManyZodSchema = z.object({ data: GiftCardUsageUpdateManyMutationInputObjectSchema, where: GiftCardUsageWhereInputObjectSchema.optional() }).strict();