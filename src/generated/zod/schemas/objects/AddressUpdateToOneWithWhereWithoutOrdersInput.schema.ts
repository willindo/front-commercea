import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressWhereInputObjectSchema as AddressWhereInputObjectSchema } from './AddressWhereInput.schema';
import { AddressUpdateWithoutOrdersInputObjectSchema as AddressUpdateWithoutOrdersInputObjectSchema } from './AddressUpdateWithoutOrdersInput.schema';
import { AddressUncheckedUpdateWithoutOrdersInputObjectSchema as AddressUncheckedUpdateWithoutOrdersInputObjectSchema } from './AddressUncheckedUpdateWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AddressWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AddressUpdateWithoutOrdersInputObjectSchema), z.lazy(() => AddressUncheckedUpdateWithoutOrdersInputObjectSchema)])
}).strict();
export const AddressUpdateToOneWithWhereWithoutOrdersInputObjectSchema: z.ZodType<Prisma.AddressUpdateToOneWithWhereWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUpdateToOneWithWhereWithoutOrdersInput>;
export const AddressUpdateToOneWithWhereWithoutOrdersInputObjectZodSchema = makeSchema();
