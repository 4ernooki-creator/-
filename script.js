let dog = 'меняется';
const myNAme = 'не меняется';
var my_name = 'о нет нинида';

dog = 'klklkklllklkljkjikjijhoihjkhkhjhjkhuihjkkhjkgjhfgyjgjhgjfgjhfgjjhui';

console.log(dog , myNAme , my_name);

let name = 'Никита';
let age = 12;
const school = 'Гимназия';
let pr = true;
console.log(name , age ,school ,pr);
console.log(typeof name , typeof age ,typeof school ,typeof pr);

// let ager = prompt('how old are you')

// if (ager >= 15){
//     alert('ну всё иди')
// } else if (ager > 10 ){
//     alert('я подумаю')
//     alert('я подумаю')
//     alert('лан иди')
// } else {
//     alert('нет')
// }
// if (ager >= 15){
//     alert('ну всё иди')
//     let u = prompt('...,я гей ; a да b нет')
//     if (u = a){
//     alert('(:')
// } else if (u = b){
//     alert('(:')
// }
// } else if (ager >= 12 ){
//     alert('мало')
//     alert('я подумаю')
//     alert('лан иди')
//     let u = prompt('...,я гей ; a да b нет')
//     if (u = a){
//     alert('(:')
// } else if (u = b){
//     alert('(:')
// }
// } else {
//     alert('нет малой')
// }
let first = prompt('num1')
let second = prompt('num2')
let chose = prompt('a+ b* c/ d- e степень f корень первого числа g/ с ост')
let u = Number(first)
let p = Number(second)
let res = u + p
let res1 = u * p
let res2 = u / p
let res3 = u - p
let res4 = Math.pow(u, p)
let res5 = Math.sqrt(u)
let res6 = u % p
let res7 = u - res6
let res8 = res7 / p
if(chose === 'a'){
    alert('сложение' + res)
} else if(chose === 'b'){
    alert('умножение' + res1)
} else if(chose ==='c'){
    alert('деление' + res2)
} else if(chose === 'd'){
    alert('вычитание' + res3)
}   else if(chose === 'e'){
    alert('степень' + res4)
} else if(chose === 'f'){
    alert('корень' + res5)
} else if(chose === 'g'){
    alert('дел с ост' + res8+ ' ' + res6)
}