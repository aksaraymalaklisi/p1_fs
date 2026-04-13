import userService from "../services/userService.js";

async function listUsers(req, res) {
    try {
        const users = await userService.listUsers();
        res.json(users);
    } catch (e) {
        res.status(500).json({erro: e.message});
    }
}

async function getUser(req, res) {
    try {
        const user = await userService.getUser(req.params.id);
        if (!user) return res.status(404).json({erro: "Usuário não encontrado."});
        res.json(user);
    } catch (e) {
        res.status(500).json({erro: e.message});
    }
}

async function createUser(req, res) {
    try {
        const user = await userService.createUser(req.body);
        if (!user) return res.status(400).json({erro: "Erro ao criar usuário."})
        res.status(201).json(user);
    } catch (e) {
        res.status(500).json({erro: e.message});
    }
}

async function updateUser(req, res) {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        if (!user) return res.status(404).json({erro: "Erro ao atualizar usuário."});
        res.json(user);
    } catch (e) {
        res.status(500).json({erro: e.message});
    }
}

async function deleteUser(req, res) {
    try {
        const user = await userService.deleteUser(req.params.id);
        if (!user) return res.status(404).json({erro: "Erro ao apagar usuário."});
        res.status(204).send();
    } catch (e) {
        res.status(500).json({erro: e.message});
    }
}

export default {listUsers, getUser, createUser, updateUser, deleteUser};