
<script type="text/javascript" charset="UTF-8">

  var math = require('mathjs');

    function pulaLinha()
{    
    document.write("<br>");
    document.write("<br>");
}

    function mostra(frase) 
{
    document.write(frase);
    pulaLinha();
}

    function calculaImc(peso, altura) 
{
    return peso / (altura * altura);
}

var nome = prompt("Informe seu nome!");

var pesoInformado = prompt(nome  + ", Informe seu peso"); 

var alturaInformada = prompt(nome + ", Informe sua altura");

var imc = calculaImc(pesoInformado, alturaInformada);


mostra(nome + ", seu imc é " + Math.round(imc));


if(imc < 18.5) {
    mostra("Você esta abaixo do recomendado")
}

if(imc > 35) {
    mostra("Você esta acima do recomendado")
}

if(imc >= 18.5 && imc <= 35) {

    mostra("Seu IMC está excelente")
}


</script>
