let n=Number(prompt("digite um ano"));
let ano=n/100+1;
let ano2=n/100;
if(n%100==0){
    document.write(`O século desse ano é ${ano2}`);
}else{
    document.write(`O século desse ano é ${ano.toFixed(0)}`);
}