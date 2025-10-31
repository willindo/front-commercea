import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumGenderNullableFilterObjectSchema as EnumGenderNullableFilterObjectSchema } from './EnumGenderNullableFilter.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CategoryNullableScalarRelationFilterObjectSchema as CategoryNullableScalarRelationFilterObjectSchema } from './CategoryNullableScalarRelationFilter.schema';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema';
import { ProductSizeListRelationFilterObjectSchema as ProductSizeListRelationFilterObjectSchema } from './ProductSizeListRelationFilter.schema';
import { CartItemListRelationFilterObjectSchema as CartItemListRelationFilterObjectSchema } from './CartItemListRelationFilter.schema';
import { OrderItemListRelationFilterObjectSchema as OrderItemListRelationFilterObjectSchema } from './OrderItemListRelationFilter.schema';
import { WishlistItemListRelationFilterObjectSchema as WishlistItemListRelationFilterObjectSchema } from './WishlistItemListRelationFilter.schema';
import { ReviewListRelationFilterObjectSchema as ReviewListRelationFilterObjectSchema } from './ReviewListRelationFilter.schema'

const productwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductWhereInputObjectSchema), z.lazy(() => ProductWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductWhereInputObjectSchema), z.lazy(() => ProductWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  price: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  stock: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  categoryId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  gender: z.union([z.lazy(() => EnumGenderNullableFilterObjectSchema), GenderSchema]).optional().nullable(),
  images: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  category: z.union([z.lazy(() => CategoryNullableScalarRelationFilterObjectSchema), z.lazy(() => CategoryWhereInputObjectSchema)]).optional(),
  sizes: z.lazy(() => ProductSizeListRelationFilterObjectSchema).optional(),
  cartItems: z.lazy(() => CartItemListRelationFilterObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemListRelationFilterObjectSchema).optional(),
  wishlistItems: z.lazy(() => WishlistItemListRelationFilterObjectSchema).optional(),
  reviews: z.lazy(() => ReviewListRelationFilterObjectSchema).optional()
}).strict();
export const ProductWhereInputObjectSchema: z.ZodType<Prisma.ProductWhereInput> = productwhereinputSchema as unknown as z.ZodType<Prisma.ProductWhereInput>;
export const ProductWhereInputObjectZodSchema = productwhereinputSchema;
