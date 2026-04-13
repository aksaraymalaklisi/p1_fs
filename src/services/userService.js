import User from '../models/userModel.js';

async function listUsers() {
    return await User.find();
}

async function getUser(id) {
    return await User.findById(id);
}

async function createUser(data) {
    return await User.create(data);
}

async function updateUser(id, data) {
    return await User.findByIdAndUpdate(id, data, { returnDocument: 'after' });
}

async function deleteUser(id) {
    return await User.findByIdAndDelete(id);
}

export default { listUsers, getUser, createUser, updateUser, deleteUser };
