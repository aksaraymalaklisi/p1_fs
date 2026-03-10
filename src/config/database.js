import mongoose from "mongoose";

async function connectionMongoDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/banco', {
            user: 'aksaray',
            pass: 'senhaforte',
            authSource: 'admin' // The database to authenticate against
        });
        console.log('MongoDB conectado.');
        // console.log(mongoose.connection.getClient())
    } catch (error) {
        console.error(error);
    }
}

export default connectionMongoDB;