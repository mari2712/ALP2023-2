let a=Number(prompt("digite o coeficiente a:"));
let b=Number(prompt("digite o coeficiente b:"));
let c=Number(prompt("digite o coeficiente c:"));
let delta= b*b -( 4*a*c);
 let x1 = ( (-b + delta)/2*a);
 let x2 = ( (-b - delta) /2*a);
if(delta<0){
document.write(`A primeira raiz é${x1} e a segunda é ${x2}`);
}
else if(delta==0){
    document.write(`A raiz é${x2}`);
}
else{ 
document.write("Não há raizes");
}