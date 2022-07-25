/* 1. Crie uma constante para ler a idade de um motorista. Caso o
motorista tenha idade maior ou igual a 18 anos imprime no console
“Pode dirigir”, caso contrário imprima “Não pode dirigir”. */

let idade = Number(prompt("Olá, digite sua idade: "));

if (idade >= 18)
document.write("Você tem mais de 18 anos, pode dirigir! ");

if (idade <= 18)
document.write("Você nao tem idade pra dirigir! ");
