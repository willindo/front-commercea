import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PendingVerificationSelectObjectSchema as PendingVerificationSelectObjectSchema } from './objects/PendingVerificationSelect.schema';
import { PendingVerificationCreateInputObjectSchema as PendingVerificationCreateInputObjectSchema } from './objects/PendingVerificationCreateInput.schema';
import { PendingVerificationUncheckedCreateInputObjectSchema as PendingVerificationUncheckedCreateInputObjectSchema } from './objects/PendingVerificationUncheckedCreateInput.schema';

export const PendingVerificationCreateOneSchema: z.ZodType<Prisma.PendingVerificationCreateArgs> = z.object({ select: PendingVerificationSelectObjectSchema.optional(),  data: z.union([PendingVerificationCreateInputObjectSchema, PendingVerificationUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PendingVerificationCreateArgs>;

export const PendingVerificationCreateOneZodSchema = z.object({ select: PendingVerificationSelectObjectSchema.optional(),  data: z.union([PendingVerificationCreateInputObjectSchema, PendingVerificationUncheckedCreateInputObjectSchema]) }).strict();