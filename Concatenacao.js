/* 
Var
// Seção de Declarações das variáveis 
   nome: caractere
   numero: real
   idade: real
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Digite seu nome")
   leia(nome)
   escreval("Digite um número")
   leia(numero)
   escreval("Digite sua idade")
   leia(idade)
   escreval("nome: ", nome, " | número: ", numero, " | idade: ", idade)
*/
var nome, numero01, numero02, idade, media;  
nome = prompt("Digite seu nome: ");
idade = prompt("Digite sua idade: ");
numero01 = prompt("Digite o número 1: ");
numero02 = prompt("Digite o número 2: ")

media = (parseInt(numero01)) + (parseInt(numero02)) / 2;

document.getElementById("paragrafo").innerText = " Nome: " + nome + " | idade: " + idade

if (media >= 5){
   document.getElementById("resultado").innerText = " Aprovado "
  
}
else{
   document.getElementById("resultado").innerText = " Reprovado "

}   