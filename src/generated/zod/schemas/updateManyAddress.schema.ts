import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AddressUpdateManyMutationInputObjectSchema as AddressUpdateManyMutationInputObjectSchema } from './objects/AddressUpdateManyMutationInput.schema';
import { AddressWhereInputObjectSchema as AddressWhereInputObjectSchema } from './objects/AddressWhereInput.schema';

export const AddressUpdateManySchema: z.ZodType<Prisma.AddressUpdateManyArgs> = z.object({ data: AddressUpdateManyMutationInputObjectSchema, where: AddressWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AddressUpdateManyArgs>;

export const AddressUpdateManyZodSchema = z.object({ data: AddressUpdateManyMutationInputObjectSchema, where: AddressWhereInputObjectSchema.optional() }).strict();