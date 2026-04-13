import { z } from 'zod';

const carSchema = z.object({
  modelo: z.string({
    required_error: "O modelo é obrigatório.",
  }).min(1, "O modelo não pode ser vazio."),
  marca: z.string({
    required_error: "A marca é obrigatória.",
  }).min(1, "A marca não pode ser vazia."),
  ano: z.number({
    required_error: "O ano é obrigatório.",
    invalid_type_error: "O ano deve ser um número."
  }).int("O ano deve ser um número inteiro.").min(1886, "O ano é inválido para carros.") // 1886 é o ano do primeiro carro patenteado :)
});

export default carSchema;
