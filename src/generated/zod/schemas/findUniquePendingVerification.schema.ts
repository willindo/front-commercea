import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PendingVerificationSelectObjectSchema as PendingVerificationSelectObjectSchema } from './objects/PendingVerificationSelect.schema';
import { PendingVerificationWhereUniqueInputObjectSchema as PendingVerificationWhereUniqueInputObjectSchema } from './objects/PendingVerificationWhereUniqueInput.schema';

export const PendingVerificationFindUniqueSchema: z.ZodType<Prisma.PendingVerificationFindUniqueArgs> = z.object({ select: PendingVerificationSelectObjectSchema.optional(),  where: PendingVerificationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PendingVerificationFindUniqueArgs>;

export const PendingVerificationFindUniqueZodSchema = z.object({ select: PendingVerificationSelectObjectSchema.optional(),  where: PendingVerificationWhereUniqueInputObjectSchema }).strict();