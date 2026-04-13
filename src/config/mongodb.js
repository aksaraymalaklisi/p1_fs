import mongoose from "mongoose";

async function connectMongoDB() {
    try {
        const HOST = process.env.MONGO_HOST || 'localhost';
        const PORT = process.env.MONGO_PORT || '27019';
        const DB = process.env.MONGO_DB || 'banco';
        
        if (!process.env.MONGO_HOST) {
            console.warn(`\n[AVISO] Variável de ambiente MONGO_HOST não fornecida. Usando o padrão de fallback: mongodb://${HOST}:${PORT}/${DB}\n`);
        }
        
        await mongoose.connect(`mongodb://${HOST}:${PORT}/${DB}`, {
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