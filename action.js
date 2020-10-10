var table = document.getElementById('table'), tr, td, row, cell;
var button = document.getElementById('button');
for (row = 0; row < 30; row++) {
    tr = document.createElement('tr');
    for (cell = 0; cell < 30; cell++) {
      if(isPrime(cell) && isPrime(row)){
            td = document.createElement('td');   
            tr.appendChild(td);
            td.innerHTML = + cell + " * " + row + " = " + "("+ (cell) * (row) +")";
        }
    }
    table.appendChild(tr);
}

// Adding Event listener to button for generating new prime renge
button.addEventListener("click", generate);

function generate(){
   var renge =  document.getElementById("value").value;
        if (renge!=""){//if reng is not empty run this function
                table.innerHTML="";
                for (row = 0; row < renge; row++) {
                tr = document.createElement('tr');
                for (cell = 0; cell < renge; cell++) {
                    if(isPrime(cell) && isPrime(row)){
                    td = document.createElement('td');   
                    tr.appendChild(td);
                    td.innerHTML = + cell + " * " + row + " = " + "("+ (cell) * (row) +")";
                }
            }
            table.appendChild(tr);
        }
    }
   
}
//function that is checking if a number is prime
function isPrime(number)
	{
        var i;
        var prime = true; //by default considering number is prime
        if(number < 2) { // 0, 1 is not a prime number by definition
               prime = false;
                }
                 for(i=2; i <= Math.sqrt(number); i++){  //for loop to iterate the number till it return false
			        if(number%i == 0){
				    prime = false;
				//break;
			}
        }
         if(prime == true){
            return number;
                   
     }
}
