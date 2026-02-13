class Product{
    constructor(name, price) {
        this.name = name;
        this.price = price;

    }
information(){
    return `Nombre: ${this.name}
    Precio: ${this.price}`;
    }
};

const soda = new Product("Postobon", 10000)

console.log(soda.information());

class FoodProduct extends Product{
    constructor(name, price, expirationDate){
            super(name, price)
            this.expirationDate = expirationDate
    }

information(){
        return`${super.information()} 
        Fecha Vencimiento: ${this.expirationDate}`;
    }

expired(){
    const hoy = new Date(); 
    const fechaExpiracion = new Date(this.expirationDate); 

    if(fechaExpiracion < hoy){
        return "Producto vencido";
    }else{
        return "Producto no vencido";
        }
    }
}
const soda2 = new FoodProduct("Coca Cola", "15000", "2026/01/17");

console.log(soda2.information());
console.log(soda2.expired());

