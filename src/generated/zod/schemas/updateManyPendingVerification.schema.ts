import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PendingVerificationUpdateManyMutationInputObjectSchema as PendingVerificationUpdateManyMutationInputObjectSchema } from './objects/PendingVerificationUpdateManyMutationInput.schema';
import { PendingVerificationWhereInputObjectSchema as PendingVerificationWhereInputObjectSchema } from './objects/PendingVerificationWhereInput.schema';

export const PendingVerificationUpdateManySchema: z.ZodType<Prisma.PendingVerificationUpdateManyArgs> = z.object({ data: PendingVerificationUpdateManyMutationInputObjectSchema, where: PendingVerificationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PendingVerificationUpdateManyArgs>;

export const PendingVerificationUpdateManyZodSchema = z.object({ data: PendingVerificationUpdateManyMutationInputObjectSchema, where: PendingVerificationWhereInputObjectSchema.optional() }).strict();