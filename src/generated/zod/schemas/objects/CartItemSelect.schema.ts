import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CartArgsObjectSchema as CartArgsObjectSchema } from './CartArgs.schema';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  cartId: z.boolean().optional(),
  productId: z.boolean().optional(),
  quantity: z.boolean().optional(),
  size: z.boolean().optional(),
  productName: z.boolean().optional(),
  productPrice: z.boolean().optional(),
  productImage: z.boolean().optional(),
  productDescription: z.boolean().optional(),
  cart: z.union([z.boolean(), z.lazy(() => CartArgsObjectSchema)]).optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const CartItemSelectObjectSchema: z.ZodType<Prisma.CartItemSelect> = makeSchema() as unknown as z.ZodType<Prisma.CartItemSelect>;
export const CartItemSelectObjectZodSchema = makeSchema();
