/* 2. Para o mesmo exercício acima insira mais uma variável a
condicional, além de saber se o motorista tem 18 anos ou mais,
temos que saber também se ele é habilitado para dirigir. Caso ele
tenha idade maior ou igual a 18 anos e possua habilitação, imprima
no console “Pode dirigir” caso contrário imprima “Não pode dirigir”. */

const habilitacao = prompt ("Voce tem habilitação? Caso possua, digite 1. Caso não possua, digite 2: ")
switch (habilitacao){ 

case '1':
   alert("Voce pode dirigir! ")
   break

case '2':
   alert("Desculpe, voce nao pode dirigir! ")
   break

default:
   alert("Número inválido, tente novamente! ")
   break

}