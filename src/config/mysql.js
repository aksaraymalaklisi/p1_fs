import { createPool } from 'mysql2/promise';

const connectMySQL = createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'loja_de_carros'
});

export default connectMySQL;