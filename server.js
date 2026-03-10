import app from './src/app.js';
import connectionMongoDB from './src/config/database.js';

const PORT = 3000;

async function startServer() {
    await connectionMongoDB();

    app.listen(PORT, ()=>{
        console.log(`Rodando na porta: ${PORT}`)
    });
}

startServer()