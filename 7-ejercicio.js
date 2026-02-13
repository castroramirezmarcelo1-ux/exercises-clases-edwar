class Game{
    constructor(title, minPlayers, maxPlayers) {
        this.title = title;
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;

    }
description(){
    return `Titulo: ${this.title}
    Jugadores Minimos: ${this.minPlayers}
    Jugadores Maximos: ${this.maxPlayers}`;
    }
};

const game1 = new Game("Assasins Creed", 1, 4)

console.log(game1.description());

class VideoGame extends Game{
    constructor(title, minPlayers, maxPlayers, plataform){
            super(title, minPlayers, maxPlayers)
            this.plataform = plataform
    }

description(){
        return`${super.description()} 
        Plataforma: ${this.plataform}`;
    }

isMultiplayer(){
    return this.maxPlayers > 1;
    }
}
const game2 = new VideoGame("FIFA", 1, 4, "EASPORTS");

console.log(game2.description());
console.log(game2.isMultiplayer());