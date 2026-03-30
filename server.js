import app from './src/app.js';
import connectMongoDB from './src/config/mongodb.js';

const PORT = 3000;

async function startServer() {
    await connectMongoDB();

    app.listen(PORT, ()=>{
        console.log(`Rodando na porta: ${PORT}`)
    });
}

startServer();