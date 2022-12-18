


function operar() {
    var resultado = 0;
    
    var numero1 = document.getElementById("num1").value;
    numero1 = parseInt(numero1);
    var numero2 = document.getElementById("num2").value;
    numero2 = parseInt(numero2);
    resultado = numero1 + numero2;
    console.log("El resultado de la operacion "+ numero1 + " y " + numero2 +" es: " + resultado);
   
    document.getElementById("resultado").innerHTML = resultado;

             } 