import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PendingVerificationSelectObjectSchema as PendingVerificationSelectObjectSchema } from './objects/PendingVerificationSelect.schema';
import { PendingVerificationWhereUniqueInputObjectSchema as PendingVerificationWhereUniqueInputObjectSchema } from './objects/PendingVerificationWhereUniqueInput.schema';
import { PendingVerificationCreateInputObjectSchema as PendingVerificationCreateInputObjectSchema } from './objects/PendingVerificationCreateInput.schema';
import { PendingVerificationUncheckedCreateInputObjectSchema as PendingVerificationUncheckedCreateInputObjectSchema } from './objects/PendingVerificationUncheckedCreateInput.schema';
import { PendingVerificationUpdateInputObjectSchema as PendingVerificationUpdateInputObjectSchema } from './objects/PendingVerificationUpdateInput.schema';
import { PendingVerificationUncheckedUpdateInputObjectSchema as PendingVerificationUncheckedUpdateInputObjectSchema } from './objects/PendingVerificationUncheckedUpdateInput.schema';

export const PendingVerificationUpsertOneSchema: z.ZodType<Prisma.PendingVerificationUpsertArgs> = z.object({ select: PendingVerificationSelectObjectSchema.optional(),  where: PendingVerificationWhereUniqueInputObjectSchema, create: z.union([ PendingVerificationCreateInputObjectSchema, PendingVerificationUncheckedCreateInputObjectSchema ]), update: z.union([ PendingVerificationUpdateInputObjectSchema, PendingVerificationUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PendingVerificationUpsertArgs>;

export const PendingVerificationUpsertOneZodSchema = z.object({ select: PendingVerificationSelectObjectSchema.optional(),  where: PendingVerificationWhereUniqueInputObjectSchema, create: z.union([ PendingVerificationCreateInputObjectSchema, PendingVerificationUncheckedCreateInputObjectSchema ]), update: z.union([ PendingVerificationUpdateInputObjectSchema, PendingVerificationUncheckedUpdateInputObjectSchema ]) }).strict();