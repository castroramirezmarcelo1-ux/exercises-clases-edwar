class Building{
    constructor(address, floors) {
        this.address = address;
        this.floors = floors;

    }
data(){
    return `Dirección: ${this.address}
    Pisos: ${this.floors}`;
    }
};

const building1 = new Building("Calle 12 # 17-12", 11)

console.log(building1.data());

class OfficeBuilding extends Building{
    constructor(address, floors, companiesInside){
            super(address, floors)
            this.companiesInside = companiesInside
    }

data(){
        return`${super.data()} 
        Empresas dentro del edificio: ${this.companiesInside}`;
    }

getCompanyCount(){
        return `Cantidad de empresas: ${this.companiesInside.length}`;
    }
}

const building2 = new OfficeBuilding("Avenida Circunvalar, Calle 12-15", "15", ["Bancolombia", "Claro", "Sura"]);

console.log(building2.data());
console.log(building2.getCompanyCount());