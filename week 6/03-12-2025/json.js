// let options={
//     method : "POST",
//     headers :{
//         "Content-type":"application/json"
//     },
//     body : JSON.stringify({
//         name: "sabi",
//         age: 18
//     })
// }
// let options={
//     method : "DELETE",
//     headers :{
//         "Content-type":"application/json"
//     },
//     body : JSON.stringify({
//         name: "sabi",
//         age: 18
//     })
// }
// let options={
//     method : "PUT",
//     headers :{
//         "Content-type":"application/json"
//     },
//     body : JSON.stringify({
//         genter: "male"
//     })
// }
let options={
    method : "PATCH",
    headers :{
        "Content-type":"application/json"
    },
    body : JSON.stringify({
        name: "sabi",
        age: 18,
        genter: "alpha"
    })
}
async function main(){
    let res= await fetch("http://localhost:3000/users/8e6d",options)
    let val= await res.json()
    console.log(val);
}
main()
