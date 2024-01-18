class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }    
    attack(){
        let attack = '';
        switch (this.type){
            case "mago":
                attack = "magia"
                break;
            case "guerreiro":
                attack = "espada"
                break;
            case "monge":
                attack = "artes marciais"
                break;
            case "ninja":
                attack = "shuriken"
        }
        console.log(`O ${this.type} ${this.name} atacou usando ${attack}`)        
    }   
}

let mago = new hero("Djavan", 74, "mago");
let guerreiro = new hero("Jorge Ben", 84, "guerreiro");
let monge = new hero("Tim Maia", 55, "monge");
let ninja = new hero("Milton Nascimento", 81, "ninja");

mago.attack(); 
guerreiro.attack();
monge.attack();
ninja.attack();