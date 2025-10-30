import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SizeSchema } from '../enums/Size.schema';
import { ProductCreateNestedOneWithoutCartItemsInputObjectSchema as ProductCreateNestedOneWithoutCartItemsInputObjectSchema } from './ProductCreateNestedOneWithoutCartItemsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int().optional(),
  size: SizeSchema.optional().nullable(),
  productDescription: z.string().optional().nullable(),
  productImage: z.string().optional().nullable(),
  productName: z.string().optional().nullable(),
  productPrice: z.number().optional().nullable(),
  product: z.lazy(() => ProductCreateNestedOneWithoutCartItemsInputObjectSchema)
}).strict();
export const CartItemCreateWithoutCartInputObjectSchema: z.ZodType<Prisma.CartItemCreateWithoutCartInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateWithoutCartInput>;
export const CartItemCreateWithoutCartInputObjectZodSchema = makeSchema();
