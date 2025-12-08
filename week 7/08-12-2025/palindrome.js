let x="malayalam"
flag=true
let y=x.length
for(let i=0;i<x.length/2;i++){
    console.log(i);
    y=y-1
    if(x[i]!=x[y]){
        console.log(`${x} is not a palindrome`);
        flag=false
        break  
    }
}
if(flag==true){
    console.log(`${x} is a palindrome`)
}