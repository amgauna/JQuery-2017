<script>
// Adapted from https://stackoverflow.com/questions/60346902/i-cant-do-a-simple-calculator-with-javascript
// https://medium.com/@singhamritpal49/creating-simple-addition-calculator-with-javascript-563ede3527e2
  
function sum() {
  var num1 = document.getElementById("n1");
  var num2 = document.getElementById("n2");
  var result = parseFloat(num1.value) + parseFloat(num2.value);
  alert(result);
}
</script>

<h3>Sum</h3>
<input type="text" id="n1"> + 
<input type="text" id="n2">
<button id="btn" onclick="return sum();">Sum</button>
