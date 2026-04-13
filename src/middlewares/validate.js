import { ZodError } from 'zod';

function validate(schema) {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                return res.status(400).json({
                    erro: "Erro de validação",
                    detalhes: error.issues.map(e => e.message)
                });
            }
            return res.status(500).json({
                erro: "Erro interno",
                mensagem: error.message
            });
        }
    };
}

export default validate;
