import { z } from 'zod';

const userSchema = z.object({
  nome: z.string({
    required_error: "Nome é obrigatório.",
  }).min(2, "Nome deve ter pelo menos 2 caracteres.")
});

export default userSchema;
