// src/middlewares/validateUser.js

function validate(req, res, next) {
    if (!req.body.nome) {
        return res.status (400).json ({
            erro: 'Nome obrigatório'
        });
    }
    next();
}

export default validate;