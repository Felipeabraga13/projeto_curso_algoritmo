/*
Var
// Seção de Declarações das variáveis
  nome: caractere
  idade, limite, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Digite a quantidade de vezes que que vai ser verificado a idade: ")
   leia(limite)
   contador := 0
   enquanto contador < limite faca
      escreval("digite o nome da pessoa: ")
      leia(nome)
      escreval("Digite a idade de ", nome, ": ")
      leia(idade)
      se idade >= 18 então
          escreval(nome, " é maior de idade. ")
      senao
          escreval(nome, " é menor de idade. ")
      fimse
      contador := contador + 1
   fimenquanto
Fimalgoritmo
*/

function acaoBotao() {
    var nome, idade, limite, contador;
    limite = prompt("Digite a quantidade de vezes que vai ser verificado a idade: ");
    limite = parseInt(limite);
    contador = 0;
    while(contador < limite){
        nome = prompt("digite o nome da pessoa: ");
        idade = prompt("Digite a idade de " + nome + ": ");
        idade = parseInt(idade);
        if (idade >= 18){
            document.getElementById("paragrafo").innerText = (nome + " é maior de idade. ")
        }
        else  {   
            document.getElementById("paragrafo").innerText = (nome, " é menor de idade. ") 
        }   
        contador ++;
    }   
}         
