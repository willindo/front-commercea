import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  userId: z.string(),
  productId: z.string()
}).strict();
export const ReviewUserIdProductIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ReviewUserIdProductIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUserIdProductIdCompoundUniqueInput>;
export const ReviewUserIdProductIdCompoundUniqueInputObjectZodSchema = makeSchema();
