<!DOCTYPE html>
<html>
<head>
	  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  	  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  	  <script src="js-css.js"></script>  	  	  
</head>
<body>
    <h1> JavaScript Array entries in Browser </h1>

	<h2>The entries() method</h2>

	<p>entries() returns an Array Iterator object with key/value pairs:</p>

	<p id="demo"></p>  

    <script>
        // For loop is faster than array.forEach function
		var sum = 0;  
		var primes = [3,5,7,11];  
		var even = [2,4,6,8,10]; 		
  
        for (i = 0; i < primes.length; i++) {
  			console.log(primes[i]);
		} 
		even.forEach(function myFunction(element) {  
    	sum += element;  
  		document.writeln(sum);  
		});  

    </script>
</body>
</html>
