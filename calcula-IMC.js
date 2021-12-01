
<script type="text/javascript" charset="UTF-8">

import { create, all } from 'mathjs'
import * as numbers from 'numbers'

var express = require('express');
var app = express.createServer();
var Imc = 0;
var math = require('mathjs');

function pulaLinha() { document.write(" <br> <br> ") }

function mostra(frase) { document.write(frase) }

var nome = prompt("Informe seu nome!");
pulalinha();

var pesoInformado = prompt(nome  + ", Informe seu peso"); 
pulalinha();

var alturaInformada = prompt(nome + ", Informe sua altura");
pulalinha();

function calculaImc(Imc) { Imc = math.round(alturaInformada/pesoInformado) }

document.write(nome + ", seu imc é " + math.round(Imc));
pulalinha();

if Imc <= 17 { document.write("Você esta abaixo do recomendado") };

else if Imc => 36 { document.write("Você esta acima do recomendado") };

else if Imc => 18 { document.write("Seu IMC está excelente") };
else if Imc <= 35 { document.write("Seu IMC está excelente") };


</script>
