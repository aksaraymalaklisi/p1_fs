import User from "../models/userModel.js";

async function listUsers(req, res) {
    const users = await User.find();
    res.json(users);
}

async function getUser(req, res) {
    const user = await User.findById(req.params.id);

    if (!user) {
        return res.status(404).json({erro: "Usuário não encontrado."})
    };
    res.json(user);
}

async function createUser(req, res) {
    const user = await User.create(req.body);

    if (!user) {
        return res.status(404).json({erro: "Erro ao criar usuário."})
    };

    res.json(user);
}

async function updateUser(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' })

    if (!user) {
        return res.status(404).json({erro: "Erro ao atualizar usuário."})
    };

    res.json(user);
}

async function deleteUser(req, res) {
    const user = await User.findByIdAndDelete(req.params.id)

    if (!user) {
        return res.status(404).json({erro: "Erro ao apagar usuário."})
    };

    res.status(204).send();
}

export default {listUsers, getUser, createUser, updateUser, deleteUser};