import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PendingVerificationSelectObjectSchema as PendingVerificationSelectObjectSchema } from './objects/PendingVerificationSelect.schema';
import { PendingVerificationUpdateInputObjectSchema as PendingVerificationUpdateInputObjectSchema } from './objects/PendingVerificationUpdateInput.schema';
import { PendingVerificationUncheckedUpdateInputObjectSchema as PendingVerificationUncheckedUpdateInputObjectSchema } from './objects/PendingVerificationUncheckedUpdateInput.schema';
import { PendingVerificationWhereUniqueInputObjectSchema as PendingVerificationWhereUniqueInputObjectSchema } from './objects/PendingVerificationWhereUniqueInput.schema';

export const PendingVerificationUpdateOneSchema: z.ZodType<Prisma.PendingVerificationUpdateArgs> = z.object({ select: PendingVerificationSelectObjectSchema.optional(),  data: z.union([PendingVerificationUpdateInputObjectSchema, PendingVerificationUncheckedUpdateInputObjectSchema]), where: PendingVerificationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PendingVerificationUpdateArgs>;

export const PendingVerificationUpdateOneZodSchema = z.object({ select: PendingVerificationSelectObjectSchema.optional(),  data: z.union([PendingVerificationUpdateInputObjectSchema, PendingVerificationUncheckedUpdateInputObjectSchema]), where: PendingVerificationWhereUniqueInputObjectSchema }).strict();