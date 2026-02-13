class Employee{
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;

    }
description(){
    return `Nombre: ${this.name} 
    Salario: ${this.salary}`;
}
};

const data1 = new Employee("Marcelo Castro Ramirez", 2000000)

console.log(data1.description());

class Manager extends Employee{
    constructor(name, salary, department){
            super(name, salary)
            this.department = department
    }
description(){
        return`${super.description()} 
        Departamento: ${this.department}`;
    }

bond() {
    const salario = 2000000; 
    const bono = salario * 0.10;

    return `Bonus: ${bono}`;
    }
}
const data2 = new Manager("Saray Alejandra Florido Aristizabal", 3000000, "110");

console.log(data2.description());
console.log(data2.bond());




