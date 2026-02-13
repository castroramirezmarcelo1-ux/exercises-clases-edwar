class Animal{
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;

    }
information(){
    return `Nombre: ${this.name}
    Especie ${this.species} 
    Edad: ${this.age} año`;
    }
};

const animal1 = new Animal("Nala", "Canina", 1)

console.log(animal1.information());

class Dog extends Animal{
    constructor(name, species, age, breed){
            super(name, species, age)
            this.breed = breed
    }

information(){
        return`${super.information()} 
        Raza: ${this.breed}`;
    }
    
bark(){
        return "Guau guau";
    }
}

const animal2 = new Dog("Noah", "Canina", 2, "Labrador");

console.log(animal2.information());
console.log(animal2.bark());
