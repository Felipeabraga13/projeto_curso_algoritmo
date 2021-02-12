/* 
Var
// Seção de Declarações das variáveis 
   sairLoop: caractere
   valor01, valor02: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   repita
       screval("escreva o primeiro valor: ")
       leia(valor01)
       escreval("escreva o segundo valor: ")
       leia(valor02)
       escreval("Resultado: ", valor01 + valor02)
       escreval("Deseja sair? S/N")
       leia(sairLoop)e
   ate sairLoop <> "N"
*/

function acaoBotao(){
    
    var sairLoop, valor01, valor02
    do{
       valor01 = prompt("escreva o primeiro valor: ")
       valor02 = prompt("escreva o segundo valor: ")
       document.getElementById("paragrafo").innerText = "resultado: " + (parseInt (valor01) + parseInt (valor02))
       sairLoop = prompt("Deseja continuar? S/N")
       
    }while(sairLoop != "N")
}


    