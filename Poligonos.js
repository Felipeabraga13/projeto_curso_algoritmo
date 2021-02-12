
var numero_de_lados, lado_do_triangulo01, lado_do_triangulo02, lado_do_triangulo03, lados_iguais_do_quadrilatero;
function tratarTriangulo()
{
    lado_do_triangulo01 = prompt("Escreva o primeiro lado do triângulo")
    lado_do_triangulo02 = prompt("Escreva o segundo lado do triângulo")
    lado_do_triangulo03 = prompt("Escreva o terceiro lado do triângulo")
    if (parseInt(lado_do_triangulo01) == (parseInt(lado_do_triangulo02)) && (parseInt(lado_do_triangulo02)) == (parseInt(lado_do_triangulo03))){
        document.getElementById("paragrafo").innerText = ("Triangulo equilatero"); 
    }
    else if(parseInt(lado_do_triangulo01) == parseInt(lado_do_triangulo02) && parseInt(lado_do_triangulo02) != parseInt(lado_do_triangulo03)){
        document.getElementById("paragrafo").innerText = "Triangulo isosceles";
    } else if(parseInt(lado_do_triangulo01) != parseInt(lado_do_triangulo02) && parseInt(lado_do_triangulo02) == parseInt(lado_do_triangulo03)){
        document.getElementById("paragrafo").innerText = "Triangulo isosceles";
     }
     else   
     
     if(parseInt(lado_do_triangulo01) != parseInt(lado_do_triangulo02) && parseInt(lado_do_triangulo01) == parseInt(lado_do_triangulo03)){
        document.getElementById("paragrafo").innerText = "Triangulo isosceles";
    }
    else
     
     if (parseInt(lado_do_triangulo01) != (parseInt(lado_do_triangulo02)) && (parseInt(lado_do_triangulo02)) != (parseInt(lado_do_triangulo03))){
        document.getElementById("paragrafo").innerText = "Triangulo escaleno"; 
    }        

}
function tratarQuadrilatero(){
    lados_iguais_do_quadrilatero = prompt("Escreva o numero de lados iguais do quadrilatero: ex: 2 ou 4: ")     
    if (lados_iguais_do_quadrilatero == 4)
        document.getElementById("paragrafo").innerText = "Quadrado"           
    else if (lados_iguais_do_quadrilatero == 2)
        document.getElementById("paragrafo").innerText = "Retângulo"
    }

function acaoBotao(){
    numero_de_lados = prompt("Escreva o número de lados de 3 a 12: ");
    if (numero_de_lados == 3) {
        tratarTriangulo()
    }
    else if (numero_de_lados == 4){
        tratarQuadrilatero()
    }
    else if (numero_de_lados == 5){
        document.getElementById("paragrafo").innerText = "Pentagono"
    }
    else if (numero_de_lados == 6){
        document.getElementById("paragrafo").innerText = "Hexágono"    
    }
    else if (numero_de_lados == 7){
        document.getElementById("paragrafo").innerText = "Heptágono"
    }
    else if (numero_de_lados == 8){
        document.getElementById("paragrafo").innerText = "Octágono"
    }
    else if (numero_de_lados == 9){
        document.getElementById("paragrafo").innerText = "Eneágono"
    }
    else if (numero_de_lados == 10){
        document.getElementById("paragrafo").innerText = "Decágono"
    }
    else if (numero_de_lados == 11){
        document.getElementById("paragrafo").innerText = "Undecágono"
    }
    else if (numero_de_lados == 12){
        document.getElementById("paragrafo").innerText = "Dodecágono"
    }}    