import carRepository from "../repositories/carRepository.js";

async function listCars(req, res) {
    const cars = await carRepository.getAllCars();
    res.json(cars); 
}

async function getCar(req, res) {
    const car = await carRepository.getCarById(req.params.id);

    if (!car) {
        return res.status(404).json({erro: "Carro não encontrado"});
    }

    res.json(car);
}

export default {listCars, getCar};