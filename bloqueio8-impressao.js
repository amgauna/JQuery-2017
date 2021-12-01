<script type="text/javascript">

// script completo para que seja bloqueada a tela para não copiar nada 
// e também para não imprimir, se for dar ctrl+p a impressão não abre

  // Combinação para bloquear ctrl+c ctrl+v

 var t_cel,tc_ln;

 if(document.addEventListener){
   [
   document.addEventListener("keydown",keyCapt,false),
   document.addEventListener("keyup",keyCapt,false),
   document.addEventListener("keypress",keyCapt,false)
   ]
 }else{
   [
   document.attachEvent("onkeydown",keyCapt),
   document.attachEvent("onkeyup",keyCapt),
   document.attachEvent("onkeypress",keyCapt)
   ]
 }

var e = WindowEventHandlers(window.event);

function keyCapt(e) { window.event }

   if(typeof window.event!="undefined") { evento = e.evento(window.event) }

   else if ((e.type=="keydown") && (e.keyCode==123)) 
   {
    [ e.returnValue = false,
    e.cancelBubble = true,
    e.keyCode = 0,
    e.stopPropagation(),
    e.preventDefault() ]
    }
   else if(e.type=="keyup"){}
   else if(e.type=="keypress"){}
 

function click(e) { button }

if (event.button==2||event.button==3) { oncontextmenu='false' }



function keypresed(e) { mousedown = document.onmousedown(click(e)) }


// Combinação de teclas CTRL + P e bloquear a ejeção no navegador

var isCtrl = false;
$onkeyup = document.onkeyup(e); 
$onkeydown = document.onkeydown(e);

function onkeyup(e) { e.which }

if(e.which == 17) { isCtrl=false }

function onkeydown(e) { e.which }

if(e.which == 17) { isCtrl=true } 
else { isCtrl=false }


var isNS = (navigator.appName == "Netscape");

if(navigator.appName == "Netscape") { 
  document.Events(Event.MOUSEDOWN||Event.MOUSEUP) 
  } 


function mischandler(e) { false }

var myevent = (isNS).e:event;
var eventbutton = (isNS).myevent.which:myevent.button;

function mousehandler(e) { eventbutton }

if((eventbutton==2)||(eventbutton==3)) { false }

document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;

</script>
