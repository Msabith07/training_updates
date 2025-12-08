let a={
    age:18,
}
let p={
    genter:"male"
}
a.__proto__=p
p.__proto__=  {
    name1 :"sabi",
}
console.log(a.name1);