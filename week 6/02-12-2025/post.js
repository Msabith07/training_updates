let options={
    method : "POST",
    headers :{
        "Content-type":"application/json"
    },
    body : JSON.stringify({
        title: "harry porter",
        userid: 1
    })
}
async function main() {
    let res= await fetch('https://jsonplaceholder.typicode.com/posts',options)
    let data= await res.json();
    console.log(data);
    
}
main()