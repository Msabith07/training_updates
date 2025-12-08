// fetch("https://potterapi-fedeperin.vercel.app/").then((res)=>{
//    return res.json();
// }).then((data)=>{
//    console.log(data,'data')
// }).catch((err)=>{
//   console.log("err",err)
// })

let datas;
var fetchData = async () => {
  try {
    var res = await fetch("https://potterapi-fedeperin.vercel.app/");
    // console.log(res);
    var data = await res.json();
    return data
  } catch (err) {
    console.log(err, "error");
  }
};
// datas = fetchData()
// fetchData().then(()=>{
//         console.log("datas", datas);
// });

async function main(){
    datas=await fetchData();
    console.log(datas);
    // console.log("hi there");
}

main()