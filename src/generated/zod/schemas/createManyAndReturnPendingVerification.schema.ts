import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PendingVerificationSelectObjectSchema as PendingVerificationSelectObjectSchema } from './objects/PendingVerificationSelect.schema';
import { PendingVerificationCreateManyInputObjectSchema as PendingVerificationCreateManyInputObjectSchema } from './objects/PendingVerificationCreateManyInput.schema';

export const PendingVerificationCreateManyAndReturnSchema: z.ZodType<Prisma.PendingVerificationCreateManyAndReturnArgs> = z.object({ select: PendingVerificationSelectObjectSchema.optional(), data: z.union([ PendingVerificationCreateManyInputObjectSchema, z.array(PendingVerificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PendingVerificationCreateManyAndReturnArgs>;

export const PendingVerificationCreateManyAndReturnZodSchema = z.object({ select: PendingVerificationSelectObjectSchema.optional(), data: z.union([ PendingVerificationCreateManyInputObjectSchema, z.array(PendingVerificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();