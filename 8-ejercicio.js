class Applicanse{
    constructor(brand, energyLevel) {
        this.brand = brand;
        this.energyLevel = energyLevel;

    }
data(){
    return `Marca: ${this.brand}
    Nivel energia: ${this.energyLevel}`;
    }
};

const applicanse1 = new Applicanse("Haceb", "A+")

console.log(applicanse1.data());

class Washer extends Applicanse{
    constructor(brand, energyLevel, capacityKg){
            super(brand, energyLevel)
            this.capacityKg = capacityKg
    }

data(){
        return`${super.data()} 
        Capacidad de KG ${this.capacityKg}`;
    }

calculateWaterUsage(){
    const litrosPorKg = 8;
    const consumo = litrosPorKg * this.capacityKg;
        return`Consumo estmado ${consumo} litros`;
    }
}
const applicanse2 = new Washer("Samsung", "B", 18);

console.log(applicanse2.data());
console.log(applicanse2.calculateWaterUsage());