"use strict";
let nomeCompleto = "Guilherme Lima";
const pi = 3.14;
let idade = 25;
console.log(nomeCompleto);
//tipos
let frase = 'Olá';
let peso = 97.5;
let estaAprovado = true;
let texto = `${frase},\n${nomeCompleto}\n${peso}\n${estaAprovado}`;
console.log(texto);
//arrays
let texto2 = [];
let texto3 = ["Olá", "Mundo"];
texto2.push("Teste"); //adiciona item no final do array
texto2.push("Outro item");
console.log(`itens do texto 2: ${texto2.length}`);
texto2.forEach(item => {
    console.log(item);
});
let numeros = [1, 2, 3, 15];
numeros.push(50.2);
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
console.log("tipo complexo -----------");
let listarPessoas = [];
let pessoa = {
    nome: "João",
    idade: 30
};
listarPessoas.push(pessoa);
let outraPessoa = {
    nome: "Maria",
    idade: 25
};
listarPessoas.push(outraPessoa);
listarPessoas.forEach(e => {
    console.log(e.nome);
});
