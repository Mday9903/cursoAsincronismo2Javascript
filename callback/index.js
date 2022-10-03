//CALLBACKS

function sum(num1,num2){
    return num1 + num2;
}

function calc (num1,num2,callback){
    return callback(num1,num2);
}

console.log('Sincrónico:',calc(2,2,sum)); //Sincrónico: 4

setTimeout(() => {
    console.log('Asincrónico:','Hola Javascript!')//Asincrónico: Hola Javscript! (en 5 segundos)
}, 5000);

function saludo(name){
    console.log(`Hola ${name}!`);
}

setTimeout(saludo, 2000, 'Marcos'); //Hola Marcos! (en 2 segundos)