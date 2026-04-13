import carService from "../services/carService.js";

async function listCars(req, res) {
    try {
        const cars = await carService.listCars();
        res.json(cars); 
    } catch (e) {
        res.status(500).json({erro: e.message});
    }
}

async function getCar(req, res) {
    try {
        const car = await carService.getCar(req.params.id);
        if (!car) return res.status(404).json({erro: "Carro não encontrado"});
        res.json(car);
    } catch (e) {
        res.status(500).json({erro: e.message});
    }
}

async function createCar(req, res) {
    try {
        // A validação de Zod garante que modelo, marca e ano estão corretos
        const car = await carService.createCar(req.body);
        res.status(201).json(car);
    } catch (e) {
        res.status(500).json({erro: e.message});
    }
}

async function updateCar(req, res) {
    try {
        // A validação de Zod garante que modelo, marca e ano estão corretos
        const updatedCar = await carService.updateCar(req.params.id, req.body);
        if (!updatedCar) return res.status(404).json({erro: "Carro não encontrado"});
        res.json(updatedCar);
    } catch (e) {
        res.status(500).json({erro: e.message});
    }
}

async function deleteCar(req, res) {
    try {
        const success = await carService.deleteCar(req.params.id);
        if (!success) return res.status(404).json({erro: "Carro não encontrado"});
        res.status(204).send();
    } catch (e) {
        res.status(500).json({erro: e.message});
    }
}

export default {listCars, getCar, createCar, updateCar, deleteCar};