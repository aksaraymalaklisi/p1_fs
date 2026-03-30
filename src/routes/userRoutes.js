import { Router } from 'express';
import validate from '../middlewares/validateUser.js';
import userController from '../controllers/userController.js';

const userRouter = Router();

let users = [
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' }
]

userRouter.get('/users', userController.listUsers);

userRouter.get('/users/:id', userController.getUser);

// Criando um novo usuário
// Exemplo de POST: curl localhost:3000/users -H "Content-Type: application/json" -d '{"nome":"Carlos"}'
userRouter.post('/users', validate, userController.createUser);

userRouter.put('/users/:id', userController.updateUser);

userRouter.delete('/users/:id', userController.deleteUser);

export default userRouter;