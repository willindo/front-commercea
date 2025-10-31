import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string().optional().nullable(),
  line1: z.string(),
  line2: z.string().optional().nullable(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string()
}).strict();
export const AddressCreateManyInputObjectSchema: z.ZodType<Prisma.AddressCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateManyInput>;
export const AddressCreateManyInputObjectZodSchema = makeSchema();
