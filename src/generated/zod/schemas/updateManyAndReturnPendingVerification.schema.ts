import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PendingVerificationSelectObjectSchema as PendingVerificationSelectObjectSchema } from './objects/PendingVerificationSelect.schema';
import { PendingVerificationUpdateManyMutationInputObjectSchema as PendingVerificationUpdateManyMutationInputObjectSchema } from './objects/PendingVerificationUpdateManyMutationInput.schema';
import { PendingVerificationWhereInputObjectSchema as PendingVerificationWhereInputObjectSchema } from './objects/PendingVerificationWhereInput.schema';

export const PendingVerificationUpdateManyAndReturnSchema: z.ZodType<Prisma.PendingVerificationUpdateManyAndReturnArgs> = z.object({ select: PendingVerificationSelectObjectSchema.optional(), data: PendingVerificationUpdateManyMutationInputObjectSchema, where: PendingVerificationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PendingVerificationUpdateManyAndReturnArgs>;

export const PendingVerificationUpdateManyAndReturnZodSchema = z.object({ select: PendingVerificationSelectObjectSchema.optional(), data: PendingVerificationUpdateManyMutationInputObjectSchema, where: PendingVerificationWhereInputObjectSchema.optional() }).strict();