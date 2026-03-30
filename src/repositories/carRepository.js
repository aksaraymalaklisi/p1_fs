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
        'SELECT * FROM carros WHERE id = ?', [id]
    );

    if (!rows[0]) return null;

    const row = rows[0];

    return new Car(row.id, row.modelo, row.marca, row.ano);
};

export async function createCar(car) {
    const [result] = await db.query(
        'INSERT INTO carros (modelo, marca, ano) VALUES (?, ?, ?)',
        [car.modelo, car.marca, car.ano]
    );

    return new Car(result.insertId, car.modelo, car.marca, car.ano);
};

export async function updateCar(id, car) {
    const [result] = await db.query(
        'UPDATE carros SET modelo = ?, marca = ?, ano = ? WHERE id = ?',
        [car.modelo, car.marca, car.ano, id]
    );

    if (result.affectedRows === 0) return null;
    return new Car(id, car.modelo, car.marca, car.ano);
};

export async function deleteCar(id) {
    const [result] = await db.query(
        'DELETE FROM carros WHERE id = ?',
        [id]
    );

    return result.affectedRows > 0;
};

export default {getAllCars, getCarById, createCar, updateCar, deleteCar};