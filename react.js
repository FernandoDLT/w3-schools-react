<!DOCTYPE html>
<html>

<body>

<h1>Arrow Function</h1>

<h2>Implicit Return</h2>

<p>The arrow function expects a return value, and returns the value by default, without the <strong>return</strong> keyword.</p>

<p id="demo"></p>
<p id="available"></p>
  
<script>
hello = () => "Hello World!";
job = () => "The job is coming!";

document.getElementById("demo").innerHTML = hello();
document.getElementById("available").innerHTML = job();
</script>

</body>
</html>