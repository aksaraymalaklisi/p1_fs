import mongoose from "mongoose";

async function connectMongoDB() {
    try {
        await mongoose.connect('mongodb://localhost:27019/banco', {
            // user: 'aksaray',
            // pass: 'senhaforte',
            // authSource: 'admin' // The database to authenticate against
        });
        console.log('MongoDB conectado.');
        // console.log(mongoose.connection.getClient())
    } catch (error) {
        console.error(error);
    }
}

export default connectMongoDB;