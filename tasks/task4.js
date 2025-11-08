function getMostFuelEfficientCars(cars, brand) {
  if (!cars.every(car => car.fuelConsumption < 6)) {
    return [];
  }
  return cars
    .filter(car => car.brand === brand)
    .sort((a, b) => a.fuelConsumption - b.fuelConsumption);
}

module.exports = getMostFuelEfficientCars;
