/*
escreval("Escreva o número 01")
   leia(numero01)
   escreval("escreva o número 02")
   leia(numero02)
   escreval("escreva o número 03")
   leia(numero03)
   
   se ((numero01 = numero02) e (numero02 = numero03)) entao
     escreval("Triângulo equilatero")
   senao
        se ((numero01 <> numero02) e (numero02 = numero03)) entao
           escreval("Triângulo isosceles")
        senao
             se ((numero01 <> numero02) e (numero02 <> numero03)) entao
                escreval("Triângulo escaleno")
             fimse
        fimse
   fimse
*/

var numero01, numero02, numero03;

numero01 = prompt("Escreva o numero 01");
numero02 = prompt("Escreva o numero 02"); 
numero03 = prompt("Escreva o numero 03");

if (parseInt(numero01) == (parseInt(numero02)) && (parseInt(numero02)) == (parseInt(numero03))){
   alert("Triangulo equilatero"); 
}
else if(parseInt(numero01) == parseInt(numero02) && parseInt(numero02) != parseInt(numero03)){
   alert("Triangulo isosceles")
}
else
   
if(parseInt(numero01) != parseInt(numero02) && parseInt(numero02) == parseInt(numero03)){
   alert("Triangulo isosceles")
}
else   

if(parseInt(numero01) == parseInt(numero03) && parseInt(numero02) != parseInt(numero01)){
   alert("Triangulo isosceles")
}   
else if(parseInt(numero01) != parseInt(numero02) && parseInt(numero02) != parseInt(numero03))
   alert("Triangulo escaleno")


/*
if (parseInt(numero01) == (parseInt(numero02)) && (parseInt(numero02)) == (parseInt(numero03))){
   alert("Triangulo equilatero"); 
}
else if (
         (parseInt(numero01) == parseInt(numero02)) ||
         (parseInt(numero02) == parseInt(numero03)) ||
         (parseInt(numero01) == parseInt(numero03))
         
         {
   alert("Triangulo isosceles")
}

else 
   alert("Triangulo escaleno")
*/