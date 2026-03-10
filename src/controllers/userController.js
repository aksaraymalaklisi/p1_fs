import User from "../models/userModel.js";

export async function listUsers(req, res) {
    const users = await User.find();
    res.json(users);
}

export async function getUser(req, res) {
    const user = await User.findById(req.params.id);

    if (!user) {
        return res.status(404).json({erro: "Usuário não encontrado."})
    }
    res.json(user);
}

export async function createUser(req, res) {
    const user = await User.create(req.body);

    if (!user) {
        return res.status(404).json({erro: "Erro ao criar usuário."})
    };

    res.json(user)

}