<script>
function mult() {
  var num1 = document.getElementById("n5");
  var num2 = document.getElementById("n6");
  var result = parseFloat(num1.value) * parseFloat(num2.value);
  alert(result);
}
</script>

<h3>Multiplication</h3>
<input type="text" id="n5"> * 
<input type="text" id="n6">
<button id="btn" onclick="return mult();">Multiplicate</button>
