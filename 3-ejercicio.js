class Vehicle{
    constructor(brand, year, color) {
        this.brand = brand;
        this.year = year;
        this.color = color;

    }
description(){
    return `El vehiculo ${this.brand} del año ${this.year}, es de color ${this.color}`;
    }
};

const car1 = new Vehicle("Peugeot", "2024", "Gris")

console.log(car1.description());

class ElectricVehicle extends Vehicle{
    constructor(brand, year, color, batteryCapacity){
            super(brand, year, color)
            this.batteryCapacity = batteryCapacity
    }
description(){
        return`${super.description()} y tiene una bateria con capacidad de ${this.batteryCapacity}KWh`;
    }
    
calculateRange() {
    const kmPerKwh = 6; 
    const capacityNumber = parseFloat(this.batteryCapacity);
    const range = capacityNumber * kmPerKwh;

    return `Autonomía estimada: ${range} km`;
    }
}
const car2 = new ElectricVehicle("Kia", "2025", "Azul", "50KWh");

console.log(car2.description());
console.log(car2.calculateRange());




