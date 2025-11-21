import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PendingVerificationSelectObjectSchema as PendingVerificationSelectObjectSchema } from './objects/PendingVerificationSelect.schema';
import { PendingVerificationWhereUniqueInputObjectSchema as PendingVerificationWhereUniqueInputObjectSchema } from './objects/PendingVerificationWhereUniqueInput.schema';

export const PendingVerificationDeleteOneSchema: z.ZodType<Prisma.PendingVerificationDeleteArgs> = z.object({ select: PendingVerificationSelectObjectSchema.optional(),  where: PendingVerificationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PendingVerificationDeleteArgs>;

export const PendingVerificationDeleteOneZodSchema = z.object({ select: PendingVerificationSelectObjectSchema.optional(),  where: PendingVerificationWhereUniqueInputObjectSchema }).strict();