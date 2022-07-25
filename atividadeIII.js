/* 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
número de 1 a 7 e imprimir no console o dia da Semana. Para este
exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
por diante. Caso o número recebido não esteja neste intervalo
imprimir “Dia não reconhecido”. */

let dia = Number(prompt("Olá, digite um numero de 1 a 7: "));

if (dia === 1)
alert("É Domingo!");

else if (dia === 2)
alert("É Segunda-Feira!");

else if (dia === 3)
alert("É Terça-Feira!");

else if (dia === 4)
alert("É Quarta-Feira!");

else if (dia === 5)
alert("É Quinta-Feira!");

else if (dia === 6)
alert("É Sexta-Feira!");

else if (dia === 7)
alert("É Sábado!");
