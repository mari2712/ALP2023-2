let n=Number(prompt("digite um ano"));
let bi=n%4==0;
let bis=n%100!==0;
let biss=n%400==0;
if(n%4==0 && n%100!==0){
    document.write("O ano  é bissexto");
}  else if (n%400==0){
    document.write("O ano  é bissexto");
}
    else {
    document.write("O ano não é bissexto");
}