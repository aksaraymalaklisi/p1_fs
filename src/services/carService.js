import carRepository from '../repositories/carRepository.js';

async function listCars() {
    return await carRepository.getAllCars();
}

async function getCar(id) {
    return await carRepository.getCarById(id);
}

async function createCar(data) {
    return await carRepository.createCar(data);
}

async function updateCar(id, data) {
    return await carRepository.updateCar(id, data);
}

async function deleteCar(id) {
    return await carRepository.deleteCar(id);
}

export default { listCars, getCar, createCar, updateCar, deleteCar };
