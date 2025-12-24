class Heroi {
    constructor (nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar() {
        switch (this.tipo) {
            case "mago": console.log("mago atacou usando magia"); break;
            case "guerreiro": console.log("guerreiro atacou usando espada"); break;
            case "monge": console.log("monge atacou usando artes marciais"); break;
            case "ninja": console.log("ninja atacou usando shuriken"); break;
            default: console.log("tipo invalido");
        }
    }
}

const heroi = new Heroi("Roberto", 19, "mago");
heroi.atacar();
