import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  line1: z.string(),
  line2: z.string().optional().nullable(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string()
}).strict();
export const AddressCreateManyUserInputObjectSchema: z.ZodType<Prisma.AddressCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateManyUserInput>;
export const AddressCreateManyUserInputObjectZodSchema = makeSchema();
