<script>
function div() {
  var num1 = document.getElementById("n7");
  var num2 = document.getElementById("n8");
  var result = parseFloat(num1.value) / parseFloat(num2.value);
  alert(result);
}
</script>

<h3>Division</h3>
<input type="text" id="n7"> / 
<input type="text" id="n8">
<button id="btn" onclick="return div();">Divide</button>
