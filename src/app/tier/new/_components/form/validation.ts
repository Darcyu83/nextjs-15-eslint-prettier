import { z } from 'zod';

export const categoryKey = ['Game', 'Etc'] as const;
export const regTierSchema = z.object({
  title: z
    .string()
    .min(2, { message: 'Title must be at least 2 charaters' })
    .max(10, { message: 'Title cannot be longger than 10 charaters' }),

  category: z.enum(categoryKey, { message: 'Please select' }),
  desc: z
    .string()
    .min(2, { message: 'category must be at least 2 charaters' })
    .max(50, { message: 'desc cannot be longger than 50 charaters' }),
});

export type TRegTierFormInput = z.infer<typeof regTierSchema>;
