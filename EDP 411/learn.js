// arithemetic operators

function addition(a,b){
    return a+b;
}

document.getElementById("addition").innerHTML = "Addition: " + addition(2,3);

function subtraction(a,b){
    return a-b;
}

document.getElementById("subtraction").innerHTML = "Subtraction: " + subtraction(2,3);

function multiplication(a,b){
    return a*b;
}

document.getElementById("multiplication").innerHTML =  "Multiplication: " + multiplication(2,3);

function division(a,b){
    return a/b;
}

document.getElementById("division").innerHTML =  "Division: " +  division(2,3);

function modulus(a,b){
    return a%b;
}

document.getElementById("modulus").innerHTML =  "Modulus: " + modulus(2,3);

function exponent(a,b){
    return a**b;
}
document.getElementById("exponent").innerHTML = "Exponent: " +  exponent(2,3);


// assignment operators
 
function assignment(){
    let x= 10;
    let y=3;
    return x+y;
}
document.getElementById("assignment").innerHTML = "The result of x + y (using the '=' assignment operator) is: " + assignment();


// comparison operators using input from user

