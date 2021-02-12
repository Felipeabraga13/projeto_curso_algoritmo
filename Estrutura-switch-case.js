/* 
Var
// Seção de Declarações das variáveis 
   numero01, numero02, resultado: real
   operacao: caractere
   
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Esse programa é feito pra calcular dois valores da sua escolha")
   escreva("Digite o número01: ")
   leia (numero01)
   escreva("Digite a operação: Ex: + , - , / , *: ")
   leia (operacao)
   escreva("Digite o número02: ")
   leia (numero02)
   
   se operacao = "+" entao
      resultado <- (numero01) + (numero02)
   senao
      se operacao = "-" entao
         resultado <- (numero01) - (numero02)
      senao
         se operacao = "/" entao
            resultado <- (numero01) / (numero02)
         senao
            se operacao = "*" entao
               resultado <- (numero01) * (numero02)
            fimse
         fimse
      fimse
   fimse
   escreval("O resultado é: ", resultado)
Fimalgoritmo
*/



function acaoBotao(){
    var numero01, numero02, operacao, resultado;
    numero01 = prompt("Escreva o primeiro número: ");
    operacao = prompt("Escreva a operação: Ex: + , - , / , *: ");
    numero02 = prompt("Escreva o segundo número: ");

    numero01 = parseFloat(numero01);
    numero02 = parseFloat(numero02);

    switch (operacao) {
       case "+":
         resultado = (numero01) + (numero02);    
          break;
       case "-":    
         resultado = (numero01) - (numero02);   
         break;
       case "*":
         resultado = (numero01) * (numero02);
         break
       case "/":
         resultado = (numero01) / (numero02);
         break               
      default:
         resultado = "Operação invalida"
          break;
    }
    
    
    

    document.getElementById("paragrafo").innerText = "O resultado é: " + resultado;
}