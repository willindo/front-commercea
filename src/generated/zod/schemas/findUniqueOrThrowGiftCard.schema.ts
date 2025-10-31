import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GiftCardSelectObjectSchema as GiftCardSelectObjectSchema } from './objects/GiftCardSelect.schema';
import { GiftCardIncludeObjectSchema as GiftCardIncludeObjectSchema } from './objects/GiftCardInclude.schema';
import { GiftCardWhereUniqueInputObjectSchema as GiftCardWhereUniqueInputObjectSchema } from './objects/GiftCardWhereUniqueInput.schema';

export const GiftCardFindUniqueOrThrowSchema: z.ZodType<Prisma.GiftCardFindUniqueOrThrowArgs> = z.object({ select: GiftCardSelectObjectSchema.optional(), include: GiftCardIncludeObjectSchema.optional(), where: GiftCardWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GiftCardFindUniqueOrThrowArgs>;

export const GiftCardFindUniqueOrThrowZodSchema = z.object({ select: GiftCardSelectObjectSchema.optional(), include: GiftCardIncludeObjectSchema.optional(), where: GiftCardWhereUniqueInputObjectSchema }).strict();