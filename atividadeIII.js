/* 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
número de 1 a 7 e imprimir no console o dia da Semana. Para este
exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
por diante. Caso o número recebido não esteja neste intervalo
imprimir “Dia não reconhecido”. */

let dia = Number(prompt("Digite um numero de 1 a 7: "));

if(dia === 1)
console.log("Hoje é domingo! ")

else if(dia === 2)
console.log("Hoje é segunda-feira! ")

else if(dia === 3)
console.log("Hoje é terça-feira! ")

else if(dia === 4)
console.log("Hoje é quarta-feira! ")

else if(dia === 5)
console.log("Hoje é quinta-feira! ")

else if(dia === 6)
console.log("Hoje é sexta=feira! ")

else if(dia === 7)
console.log("Hoje é sábado! ")

else if(dia >= 8)
console.log("Dia não reconhecido! ")