import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderScalarWhereInputObjectSchema as OrderScalarWhereInputObjectSchema } from './OrderScalarWhereInput.schema';
import { OrderUpdateManyMutationInputObjectSchema as OrderUpdateManyMutationInputObjectSchema } from './OrderUpdateManyMutationInput.schema';
import { OrderUncheckedUpdateManyWithoutAddressInputObjectSchema as OrderUncheckedUpdateManyWithoutAddressInputObjectSchema } from './OrderUncheckedUpdateManyWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OrderUpdateManyMutationInputObjectSchema), z.lazy(() => OrderUncheckedUpdateManyWithoutAddressInputObjectSchema)])
}).strict();
export const OrderUpdateManyWithWhereWithoutAddressInputObjectSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutAddressInput>;
export const OrderUpdateManyWithWhereWithoutAddressInputObjectZodSchema = makeSchema();
