import { Router } from 'express';
import validate from '../middlewares/validateUser.js';
import {listUsers, getUser, createUser} from '../controllers/userController.js';

const router = Router();

let users = [
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' }
]

router.get('/users', listUsers);

router.get('/users/:id', getUser);

// Criando um novo usuário
// Exemplo de POST: curl localhost:3000/users -H "Content-Type: application/json" -d '{"nome":"Carlos"}'
router.post('/users', validate, createUser);

router.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id); // params se refere ao que está presente na URL (/users/:id)
    const newName = req.body.nome;

    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex !== -1) {
        users[userIndex]['nome'] = newName;
        res.status(200).json(users[userIndex]);
    } else {
        return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
});

router.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    if (userId !== -1) {
        users = users.filter(user => user.id !== userId);
        res.status(204).send('Usuário removido.');
    } else {
        return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
});

export default router;