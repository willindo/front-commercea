import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PendingVerificationWhereInputObjectSchema as PendingVerificationWhereInputObjectSchema } from './objects/PendingVerificationWhereInput.schema';

export const PendingVerificationDeleteManySchema: z.ZodType<Prisma.PendingVerificationDeleteManyArgs> = z.object({ where: PendingVerificationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PendingVerificationDeleteManyArgs>;

export const PendingVerificationDeleteManyZodSchema = z.object({ where: PendingVerificationWhereInputObjectSchema.optional() }).strict();