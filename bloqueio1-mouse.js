<script type="text/javascript">
 
 var t_cel,tc_ln;
 if(document.addEventListener)
  [
   document.addEventListener("keydown",keyCapt,false),
   document.addEventListener("keyup",keyCapt,false),
   document.addEventListener("keypress",keyCapt,false)
 ]
else
 [
   document.attachEvent("onkeydown",keyCapt),
   document.attachEvent("onkeyup",keyCapt),
   document.attachEvent("onkeypress",keyCapt)
 ]
 
 function keyCapt(e){
   if(typeof window.event!="undefined"){
    var e = (window.event) ? window.event : event;
   }
   if(e.type=="keydown"){
    if (e.keyCode==123) {
    e.returnValue = false;
    e.cancelBubble = true;
    e.keyCode = 0;
    e.stopPropagation();
    e.preventDefault();
    };
   }
   else if(e.type=="keyup"){}
   else if(e.type=="keypress"){}
 }
 
function click() {
if (event.button==2||event.button==3) {
oncontextmenu='return false';
}
}
function keypresed() {;
}
document.onmousedown=click
document.oncontextmenu = new Function("return false;")

var isCtrl = false;
document.onkeyup=function(e)
{
    if(e.which == 17)
    isCtrl=false;
}
document.onkeydown=function(e)
{
    if(e.which == 17)
    isCtrl=true;
    if((e.which == 85 || e.which == 83) && (isCtrl == true))
    {
        return false;
    }
}
var isNS = (navigator.appName == "Chrome") ? 1 : 0;
if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);
function mischandler(){
    return false;
}
function mousehandler(e){
    var myevent = (isNS) ? e : event;
    var eventbutton = (isNS) ? myevent.which : myevent.button;
    if((eventbutton==2)||(eventbutton==3)) return false;
}
document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;

</script>
