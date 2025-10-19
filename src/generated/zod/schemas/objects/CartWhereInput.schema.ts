import * as z from 'zod';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { CartItemListRelationFilterObjectSchema as CartItemListRelationFilterObjectSchema } from './CartItemListRelationFilter.schema'

const cartwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CartWhereInputObjectSchema), z.lazy(() => CartWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CartWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CartWhereInputObjectSchema), z.lazy(() => CartWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  items: z.lazy(() => CartItemListRelationFilterObjectSchema).optional()
}).strict();
export const CartWhereInputObjectSchema: z.ZodType<any> = cartwhereinputSchema as unknown as z.ZodType<any>;
export const CartWhereInputObjectZodSchema = cartwhereinputSchema;
