import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PendingVerificationCreateManyInputObjectSchema as PendingVerificationCreateManyInputObjectSchema } from './objects/PendingVerificationCreateManyInput.schema';

export const PendingVerificationCreateManySchema: z.ZodType<Prisma.PendingVerificationCreateManyArgs> = z.object({ data: z.union([ PendingVerificationCreateManyInputObjectSchema, z.array(PendingVerificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PendingVerificationCreateManyArgs>;

export const PendingVerificationCreateManyZodSchema = z.object({ data: z.union([ PendingVerificationCreateManyInputObjectSchema, z.array(PendingVerificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();