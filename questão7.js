let altura=Number(prompt("digite sua altura"));
let peso=Number(prompt("digite seu peso"));
let imc=(peso/(Math.pow(altura,2)));

if( imc<18.5){
    document.write("Voce está abaixo do peso");
}else if( imc>=18.5 && imc<=24.9){
    document.write("Voce está com peso normal");
}else if( imc>=25 && imc<=29.9){
    document.write("Voce está acima do peso");
}else if( imc>=30 && imc<=34.9){
    document.write("Voce está com obesidade grau I");
}else if( imc>=35 && imc<=39.9){
    document.write("Voce está com obesidade grau II");
}else if( imc>40){
    document.write("Voce está com obesidade grau III");
}