import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SizeSchema } from '../enums/Size.schema';
import { CartCreateNestedOneWithoutItemsInputObjectSchema as CartCreateNestedOneWithoutItemsInputObjectSchema } from './CartCreateNestedOneWithoutItemsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int().optional(),
  size: SizeSchema.optional().nullable(),
  productName: z.string().optional().nullable(),
  productPrice: z.number().optional().nullable(),
  productImage: z.string().optional().nullable(),
  productDescription: z.string().optional().nullable(),
  cart: z.lazy(() => CartCreateNestedOneWithoutItemsInputObjectSchema)
}).strict();
export const CartItemCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.CartItemCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateWithoutProductInput>;
export const CartItemCreateWithoutProductInputObjectZodSchema = makeSchema();
