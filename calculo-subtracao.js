<script>
function sub() {
  var num1 = document.getElementById("n3");
  var num2 = document.getElementById("n4");
  var result = parseFloat(num1.value) - parseFloat(num2.value);
  alert(result);
}
</script>

<h3>Subtraction</h3>
<input type="text" id="n3"> - 
<input type="text" id="n4">
<button id="btn" onclick="return sub();">Sub</button>
