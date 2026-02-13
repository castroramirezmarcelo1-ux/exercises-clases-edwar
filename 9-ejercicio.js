class Artist{
    constructor(name, genre) {
        this.name = name;
        this.genre = genre;

    }
description(){
    return `Nombre: ${this.name}
    Genero: ${this.genre}`;
    }
};

const artist1 = new Artist("Camilo", "Trap")

console.log(artist1.description());

class Singer extends Artist{
    constructor(name, genre, albums){
            super(name, genre)
            this.albums = albums
    }

description(){
        return`${super.description()} 
        Cantidad de Álbumes ${this.albums}`;
    }

addAlbum(){
    this.albums++;
        return`Ahora son ${this.albums} albumes`;
    }
}
const artist2 = new Singer("Kilyan", "Trap", 18);

console.log(artist2.description());
console.log(artist2.addAlbum());