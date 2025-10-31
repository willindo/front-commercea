import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SizeSchema } from '../enums/Size.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  cartId: z.string(),
  quantity: z.number().int().optional(),
  size: SizeSchema.optional().nullable(),
  productName: z.string().optional().nullable(),
  productPrice: z.number().optional().nullable(),
  productImage: z.string().optional().nullable(),
  productDescription: z.string().optional().nullable()
}).strict();
export const CartItemCreateManyProductInputObjectSchema: z.ZodType<Prisma.CartItemCreateManyProductInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateManyProductInput>;
export const CartItemCreateManyProductInputObjectZodSchema = makeSchema();
