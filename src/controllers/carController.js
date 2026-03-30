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

async function createCar(req, res) {
    const { modelo, marca, ano } = req.body;
    
    if (!modelo || !marca || !ano) {
        return res.status(400).json({erro: "Dados insuficientes"});
    }
    
    const car = await carRepository.createCar({modelo, marca, ano});
    res.status(201).json(car);
}

async function updateCar(req, res) {
    const { modelo, marca, ano } = req.body;
    
    if (!modelo || !marca || !ano) {
        return res.status(400).json({erro: "Dados insuficientes"});
    }

    const updatedCar = await carRepository.updateCar(req.params.id, {modelo, marca, ano});

    if (!updatedCar) {
        return res.status(404).json({erro: "Carro não encontrado"});
    }

    res.json(updatedCar);
}

async function deleteCar(req, res) {
    const success = await carRepository.deleteCar(req.params.id);

    if (!success) {
        return res.status(404).json({erro: "Carro não encontrado"});
    }

    res.status(204).send();
}

export default {listCars, getCar, createCar, updateCar, deleteCar};