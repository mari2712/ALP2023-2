let lado1=Number(prompt("digite o lado 1:"));
let lado2=Number(prompt("digite o lado 2:"));
let lado3=Number(prompt("digite o lado 3:"));

if(lado1  != lado2  != lado3){
    document.write("O triangulo é escaleno");
}else if(lado1==lado2==lado3){
    document.write("O triangulo é equilatero");
}else if (lado1==lado2 &&  lado3==lado2 && lado1==lado3){
    document.write("O triangulo é isosceles");
}