import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PendingVerificationOrderByWithRelationInputObjectSchema as PendingVerificationOrderByWithRelationInputObjectSchema } from './objects/PendingVerificationOrderByWithRelationInput.schema';
import { PendingVerificationWhereInputObjectSchema as PendingVerificationWhereInputObjectSchema } from './objects/PendingVerificationWhereInput.schema';
import { PendingVerificationWhereUniqueInputObjectSchema as PendingVerificationWhereUniqueInputObjectSchema } from './objects/PendingVerificationWhereUniqueInput.schema';
import { PendingVerificationScalarFieldEnumSchema } from './enums/PendingVerificationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PendingVerificationFindManySelectSchema: z.ZodType<Prisma.PendingVerificationSelect> = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    name: z.boolean().optional(),
    password: z.boolean().optional(),
    token: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PendingVerificationSelect>;

export const PendingVerificationFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    name: z.boolean().optional(),
    password: z.boolean().optional(),
    token: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const PendingVerificationFindManySchema: z.ZodType<Prisma.PendingVerificationFindManyArgs> = z.object({ select: PendingVerificationFindManySelectSchema.optional(),  orderBy: z.union([PendingVerificationOrderByWithRelationInputObjectSchema, PendingVerificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: PendingVerificationWhereInputObjectSchema.optional(), cursor: PendingVerificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PendingVerificationScalarFieldEnumSchema, PendingVerificationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PendingVerificationFindManyArgs>;

export const PendingVerificationFindManyZodSchema = z.object({ select: PendingVerificationFindManySelectSchema.optional(),  orderBy: z.union([PendingVerificationOrderByWithRelationInputObjectSchema, PendingVerificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: PendingVerificationWhereInputObjectSchema.optional(), cursor: PendingVerificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PendingVerificationScalarFieldEnumSchema, PendingVerificationScalarFieldEnumSchema.array()]).optional() }).strict();