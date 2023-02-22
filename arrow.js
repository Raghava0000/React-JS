// ES5:
// function square(num){
//     return num*num;
// }

// ES6:
// var square=(num)=>num*num;
// console.log(square(5));
// console.log(typeof square);

// ..........................................

// Code:
// var users=[
//     {
//         username:"John Doe",
//         address:"123 Main Street"
//     },
//     {
//         username:"raghava",
//         address:"hyd"
//     },
//     {
//         username:"shabbu",
//         address:"amirpet"
//     }
// ]
// ES5:
// users.forEach(function(user){
//     console.log(user.username+"\t"+user.address);
// })
// ES6:
// users.forEach(user=>console.log(user.username+"\t"+user.address))

//..........................................

//ES5:
// function f1(a,b,c){
//     if (a==undefined){
//         a=10;
//     }
//     if (b==undefined){
//         b=20;
//     }
//     if (c==undefined){
//         c=30;
//     }
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// f1();
// f1(1,2,3);
// f1(20,21);

//ES6:
// function f2(a=11,b=12,c=13){
//     console.log(a,b,c)
// }
// f2(80,90,100);
// f2();