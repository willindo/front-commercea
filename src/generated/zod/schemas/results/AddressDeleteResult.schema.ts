import * as z from 'zod';
export const AddressDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  user: z.unknown().optional(),
  userId: z.string().optional(),
  line1: z.string(),
  line2: z.string().optional(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  orders: z.array(z.unknown())
}));