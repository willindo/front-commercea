import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentScalarWhereInputObjectSchema as PaymentScalarWhereInputObjectSchema } from './PaymentScalarWhereInput.schema';
import { PaymentUpdateManyMutationInputObjectSchema as PaymentUpdateManyMutationInputObjectSchema } from './PaymentUpdateManyMutationInput.schema';
import { PaymentUncheckedUpdateManyWithoutOrderInputObjectSchema as PaymentUncheckedUpdateManyWithoutOrderInputObjectSchema } from './PaymentUncheckedUpdateManyWithoutOrderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PaymentUpdateManyMutationInputObjectSchema), z.lazy(() => PaymentUncheckedUpdateManyWithoutOrderInputObjectSchema)])
}).strict();
export const PaymentUpdateManyWithWhereWithoutOrderInputObjectSchema: z.ZodType<Prisma.PaymentUpdateManyWithWhereWithoutOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpdateManyWithWhereWithoutOrderInput>;
export const PaymentUpdateManyWithWhereWithoutOrderInputObjectZodSchema = makeSchema();
