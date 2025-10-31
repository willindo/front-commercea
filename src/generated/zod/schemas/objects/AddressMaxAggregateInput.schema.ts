import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  line1: z.literal(true).optional(),
  line2: z.literal(true).optional(),
  city: z.literal(true).optional(),
  state: z.literal(true).optional(),
  postalCode: z.literal(true).optional(),
  country: z.literal(true).optional()
}).strict();
export const AddressMaxAggregateInputObjectSchema: z.ZodType<Prisma.AddressMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AddressMaxAggregateInputType>;
export const AddressMaxAggregateInputObjectZodSchema = makeSchema();
