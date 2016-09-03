'use strict';

var my_array: Array<number> = [1,2,3,4,5];

var other_array: Array<any> = ["array", 3, 5, 6, [1,2,3,4]];

var tasks: Array<number> = [1,3,4,5];

function greeter(person: Array<string>){
    return person;
}

var user: Array<string> = ["1","32"];

//variable que no es arreglo

var words: string = 'algo';

var numero1: number = 1;
var numero2: number = 2;

function sumar(numero1:number, numero2:number){
    return numero1 + numero2;
}

console.log(greeter(user));
console.log(sumar(numero1, numero2));