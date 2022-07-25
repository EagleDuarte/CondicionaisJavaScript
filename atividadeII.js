/* 2. Para o mesmo exercício acima insira mais uma variável a
condicional, além de saber se o motorista tem 18 anos ou mais,
temos que saber também se ele é habilitado para dirigir. Caso ele
tenha idade maior ou igual a 18 anos e possua habilitação, imprima
no console “Pode dirigir” caso contrário imprima “Não pode dirigir”. */


switch (prompt(" Olá, você tem habilitação? Digite 1, caso possua. Digite 2, caso não possua. ")){
    
    case '1': 
    alert("Você esta habilitado para dirigir! ");
    break
    
    case '2': 
    alert("Desculpe, você não está habilitado para dirigir! ");
    break

    default:
        alert("Desculpe, número inválido! ")
        break
}