import {default as db} from "../config/mysql.js"; // Coisa esquisita. Lembre-se de corrigir os imports para default
import Car from "../models/carModel.js"; // e named, para evitar essas decisões esotéricas do alias.

export async function getAllCars() {
    const [rows] = await db.query('SELECT * FROM carros');

    return rows.map(
        row => new Car(row.id, row.modelo, row.marca, row.ano)
    );
};

export async function getCarById(id) {
    const [rows] = await db.query(
        'SELECT * FROM carros WHERE id = ?', {id}
    );

    if (!rows[0]) return null;

    const row = rows[0];

    return new Car(row.id, row.modelo, row.marca, row.ano);
};

export default {getAllCars, getCarById};