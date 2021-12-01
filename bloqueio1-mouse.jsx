<script type="text/javascript">

 var t_cel,tc_ln;


   if (e) {
   [
   document.addEventListener("keydown",keyCapt,false),
   document.addEventListener("keyup",keyCapt,false),
   document.addEventListener("keypress",keyCapt,false)
   ]
   } else {
   [
   document.attachEvent("onkeydown",keyCapt,true),
   document.attachEvent("onkeyup",keyCapt,true),
   document.attachEvent("onkeypress",keyCapt,true)
   ]
  }
 
 var e=event||window.event;

 function keyCapt(e){ window.event }

   if ((e.type=="keydown") && (e.keyCode==123)) {
    [
    e.returnValue = false,
    e.cancelBubble = true,
    e.keyCode = 0,
    e.stopPropagation(),
    e.preventDefault()
    ]
    }
   else if(e.type=="keyup"){} 
   else (e.type=="keypress"){}
 
 
function click() {
 [
 event.button==2||event.button==3,
 oncontextmenu='return false'
 ]
}

function keypresed() { }

document.onmousedown=click
document.oncontextmenu = new Function("return false;")


var isCtrl = false;

if (onkeyup == document.attachEvent("onkeyup",keyCapt) && (e.which == 17))
{ isCtrl=false }


if (onkeydown == document.attachEvent("onkeydown",keyCapt) && (e.which == 17))
{ isCtrl=true }

if ( (e.which == 85 || e.which == 83) )
{ isCtrl=true }


var isNS = (navigator.appName == "Chrome") ? 1 : 0;

if(navigator.appName == "Netscape") 
{ document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP) }

function mischandler() { isCtrl=false }

var myevent = (isNS) ? e:event;
var eventbutton = (isNS) ? myevent.which:myevent.button;

function mousehandler(e) { (eventbutton==2)||(eventbutton==3) }

document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;

</script>