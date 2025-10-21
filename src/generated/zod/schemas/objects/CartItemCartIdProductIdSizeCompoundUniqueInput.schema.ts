import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SizeSchema } from '../enums/Size.schema'

const makeSchema = () => z.object({
  cartId: z.string(),
  productId: z.string(),
  size: SizeSchema
}).strict();
export const CartItemCartIdProductIdSizeCompoundUniqueInputObjectSchema: z.ZodType<Prisma.CartItemCartIdProductIdSizeCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCartIdProductIdSizeCompoundUniqueInput>;
export const CartItemCartIdProductIdSizeCompoundUniqueInputObjectZodSchema = makeSchema();
