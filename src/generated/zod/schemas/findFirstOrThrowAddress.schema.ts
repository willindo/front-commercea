import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AddressIncludeObjectSchema as AddressIncludeObjectSchema } from './objects/AddressInclude.schema';
import { AddressOrderByWithRelationInputObjectSchema as AddressOrderByWithRelationInputObjectSchema } from './objects/AddressOrderByWithRelationInput.schema';
import { AddressWhereInputObjectSchema as AddressWhereInputObjectSchema } from './objects/AddressWhereInput.schema';
import { AddressWhereUniqueInputObjectSchema as AddressWhereUniqueInputObjectSchema } from './objects/AddressWhereUniqueInput.schema';
import { AddressScalarFieldEnumSchema } from './enums/AddressScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AddressFindFirstOrThrowSelectSchema: z.ZodType<Prisma.AddressSelect> = z.object({
    id: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional(),
    line1: z.boolean().optional(),
    line2: z.boolean().optional(),
    city: z.boolean().optional(),
    state: z.boolean().optional(),
    postalCode: z.boolean().optional(),
    country: z.boolean().optional(),
    orders: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AddressSelect>;

export const AddressFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional(),
    line1: z.boolean().optional(),
    line2: z.boolean().optional(),
    city: z.boolean().optional(),
    state: z.boolean().optional(),
    postalCode: z.boolean().optional(),
    country: z.boolean().optional(),
    orders: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const AddressFindFirstOrThrowSchema: z.ZodType<Prisma.AddressFindFirstOrThrowArgs> = z.object({ select: AddressFindFirstOrThrowSelectSchema.optional(), include: AddressIncludeObjectSchema.optional(), orderBy: z.union([AddressOrderByWithRelationInputObjectSchema, AddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: AddressWhereInputObjectSchema.optional(), cursor: AddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AddressScalarFieldEnumSchema, AddressScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AddressFindFirstOrThrowArgs>;

export const AddressFindFirstOrThrowZodSchema = z.object({ select: AddressFindFirstOrThrowSelectSchema.optional(), include: AddressIncludeObjectSchema.optional(), orderBy: z.union([AddressOrderByWithRelationInputObjectSchema, AddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: AddressWhereInputObjectSchema.optional(), cursor: AddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AddressScalarFieldEnumSchema, AddressScalarFieldEnumSchema.array()]).optional() }).strict();