class Course{
    constructor(name, duration, category) {
        this.name = name;
        this.duration = duration;
        this.category = category;

    }
feature(){
    return `El curso de ${this.name} tiene una duración de ${this.duration} meses, este es categoria ${this.category}`;
    }
};

const course1 = new Course("Ingles", "8", "B")

console.log(course1.feature());

class OnlyCourse extends Course{
    constructor(name, duration, category, plataform){
            super(name, duration, category)
            this.plataform = plataform
    }
feature(){
        return`${super.feature()} y es en la plataforma ${this.plataform}`;
    }

getShortInfo() {
        return `Curso ${this.name} en la Plataforma ${this.plataform}`;
    }
}

const course2 = new OnlyCourse("Ingles", "10", "A", "Betowa");

console.log(course2.feature());
console.log(course2.getShortInfo());


