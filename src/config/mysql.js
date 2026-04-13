import { createPool } from 'mysql2/promise';

const HOST = process.env.MYSQL_HOST || 'localhost';
const PORT = process.env.MYSQL_PORT || 3307;
const USER = process.env.MYSQL_USER || 'root';
const PASSWORD = process.env.MYSQL_PASSWORD || 'root';
const DATABASE = process.env.MYSQL_DATABASE || 'loja_de_carros';

if (!process.env.MYSQL_HOST) {
    console.warn(`\n[AVISO] Variável de ambiente MYSQL_HOST não fornecida. Usando o banco padrão no host: ${HOST}:${PORT}\n`);
}

const connectMySQL = createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    port: PORT
});

export default connectMySQL;