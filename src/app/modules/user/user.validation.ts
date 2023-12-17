import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be string type',
    })
    .max(20, { message: 'Password can not be more 20 characters' })
    .optional(),
  needChangePassword: z.boolean().optional().default(true),
});

export const userValidation = {
  userValidationSchema,
};
