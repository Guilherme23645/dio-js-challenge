function calcularSaldo(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    return saldo;
}

function calcularNivel(saldo) {
    if (saldo <= 10) {
        return "Ferro";
    } else if (saldo <= 20) {
        return "Bronze";
    } else if (saldo <= 50) {
        return "Prata";
    } else if (saldo <= 80) {
        return "Ouro";
    } else if (saldo <= 90) {
        return "Diamante";
    } else if (saldo <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

let vitorias = 60;
let derrotas = 20;
saldo = calcularSaldo(vitorias, derrotas);
nivel = calcularNivel(saldo);

console.log(`O Herói tem de saldo de vitorias ${saldo} e está no nível ${nivel}`);
