// let a=()=>{
//     setTimeout(()=>{
//         console.log('cooking is done');
//     },3000)
// }

// let b=()=>{
//     console.log('cleaning is done');
// }

// a()
// b()

let p1 = new Promise((resolve, reject) => {
    let gas =true;
    if(gas){
    setTimeout(() => {
        resolve("cooking is done")
    }, 3000);
    }else{
        reject('cooking not completed because gas not avalable')
    }

}).then((data) => {
  console.log(data);
}).catch((rej)=>{
    console.log(rej)
}).finally(()=>{
    return console.log('i am at home')
});
console.log("cleaning is done");
