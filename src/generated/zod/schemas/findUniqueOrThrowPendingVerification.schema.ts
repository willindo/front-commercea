import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PendingVerificationSelectObjectSchema as PendingVerificationSelectObjectSchema } from './objects/PendingVerificationSelect.schema';
import { PendingVerificationWhereUniqueInputObjectSchema as PendingVerificationWhereUniqueInputObjectSchema } from './objects/PendingVerificationWhereUniqueInput.schema';

export const PendingVerificationFindUniqueOrThrowSchema: z.ZodType<Prisma.PendingVerificationFindUniqueOrThrowArgs> = z.object({ select: PendingVerificationSelectObjectSchema.optional(),  where: PendingVerificationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PendingVerificationFindUniqueOrThrowArgs>;

export const PendingVerificationFindUniqueOrThrowZodSchema = z.object({ select: PendingVerificationSelectObjectSchema.optional(),  where: PendingVerificationWhereUniqueInputObjectSchema }).strict();