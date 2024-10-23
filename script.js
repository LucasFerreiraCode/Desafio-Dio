let XP = prompt("Digite XP aqui")

// let Ferro = 1.000
// let Bronze = >= 1.001 && <= 2.000
// let Prata =  2.001  5.000
// let Ouro = 5.001  7.000
// let Platina =  7.001  8.000 
// let Ascendente = 8.001  9.000
// let Imortal = 9.001  10.000
// let Radiante = >= 10.001

let Nivel;

if (XP <= 1.000) {
    Nivel = "Ferro"
} else if (XP >= 1.001 && XP <= 2.000) { 
    Nivel = "Bronze"
} else {
    Nivel = "test";
}

console.log("O Herói de nome Chupisco está no nível de: "+ Nivel);