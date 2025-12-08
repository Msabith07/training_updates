// function myfunction(){
//     // return new Promise((resove,reject)=>{
//         setTimeout(()=>{
//             // console.log((num));
//             return "hi there"
//         },1000)
//     // })
// }
// let p=myfunction()
// console.log(p);

// its return value is not reterned

// function myfunction(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log((num));
//       resolve(num);
//     }, 1000);
//   });
// }
// function myfunction1(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log((num));
//       resolve(num+5);
//     }, 1000);
//   });
// }
// function myfunction2(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log((num));
//       resolve(num+10);
//     }, 1000);
//   });
// }
// myfunction(5).then((value) => {
//   return myfunction1(10+value);
// }).then((value1)=>{
//     return myfunction2(value1);
// }).then((value3)=>{
//     console.log(value3);

// });

const p1 = new Promise((resolve,reject)=>{
    resolve(['js','react'])
})
const p2 = new Promise((resolve,reject)=>{
    resolve(['css','html'])
})
// p1.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{
//     console.log(value);
// })

const allpromise= Promise.all([p1,p2])
allpromise.then((value)=>{
    console.log(value.flat(Infinity));
})
