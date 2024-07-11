// Classe base (abstração)
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    descricao() {
    return `Veículo da marca ${this.marca}, modelo ${this.modelo}.`;
    }
}

  // Classe que herda de Veiculo
    class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
        super(marca, modelo);
        this.portas = portas;
    }

    descricao() {
        return `Carro da marca ${this.marca}, modelo ${this.modelo}, com ${this.portas} portas.`;
    }
}

  // Outra classe que herda de Veiculo
    class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    descricao() {
        return `Moto da marca ${this.marca}, modelo ${this.modelo}, com ${this.cilindradas} cilindradas.`;
    }
}

  // Criando instâncias dos objetos
const carro1 = new Carro('Toyota', 'Corolla', 4);
const carro2 = new Carro('Honda', 'Civic', 4);
const moto1 = new Moto('Yamaha', 'MT-07', 689);

// Mostrando descrições
console.log(carro1.descricao()); // Carro da marca Toyota, modelo Corolla, com 4 portas.
console.log(carro2.descricao()); // Carro da marca Honda, modelo Civic, com 4 portas.
console.log(moto1.descricao());  // Moto da marca Yamaha, modelo MT-07, com 689 cilindradas.
