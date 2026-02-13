class Device{
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;

    }
feature(){
    return `La marca es ${this.brand} su modelo ${this.model} tiene un costo de ${this.price}`;
    }
};

const phone1 = new Device("Apple", "Series 11", "500000")

console.log(phone1.feature());

class SmartPhone extends Device{
    constructor(brand, model, price, cameraMP){
            super(brand,model, price)
            this.cameraMP = cameraMP
    }
feature(){
        return`${super.feature()} y tiene una cámara de ${this.cameraMP}MP`;
    }

}

const phone2 = new SmartPhone("Apple", "14", 700000, 250);

console.log(phone2.feature());



    
