// const express = require('express');
// //const fs = require("fs");
// const fsPromises = require("fs/promises");
// const app = express();
// app.use(express.json());
// app.get('/api/products' , (req ,res)=>{
//   res.send("....HOMEpage....")
//   console.log(req);
//   res.send('work in progress');

      
//     const arr=await fsPromises.readFile('./data.json',"utf8");
//     const obj =JSON.parse(data).products;
//     const len =arr.length;
//         if(len==0){
//           data.id=1;
//           console.log(arr);
//           arr.push(data);
//           console.log(arr) 
//         }
//         else{
//           const newId=db[len-1];
//         }
//       res.json(
//         {
//       status:'success',
//       results: arr.length,
//       data:{
//         products:arr
//       }

//       app.post('/api/products' , (req ,res)=>{
//         //console.log(Object.keys(req));
//         //console.log(req.body);
//         const data =req.body;
//         data.id=121;
//         console.log(data);
//         const db = fsPromises.readFile(",/data.json",)
        
//   res.send('work in progress');

// // app.listen(1400,()=>{
// //   console.log("....server started.....");+
//       });


 const express=require('express');
// const fs=require('fs');
const app=express();
//middleware
app.use(express.json());
const fsPromises=require("fs/promises");
app.get('/api/products',async(req,res)=>
{
    // const data=fs.readFileSync('./data.json',"utf8")
    
     const data= await fsPromises.readFile('./data.json',"utf8")
    const arr=JSON.parse(data).products;
    res.json({
        status:'succes',
        results:arr.length,

        data:{
            products:arr,
        }
    });


});
    app.post('/api/products',async(req,res)=>
    {
       const data=req.body;
    //    data.id=121;
    //     res.send(data);

        const db= await fsPromises.readFile("./data.json","utf8");
        const arr=JSON.parse(db);
        const len=arr.length;
        const newProduct=data;
        if(len==0)
        {
          newProduct.id=1;
            // data.id=1
            // arr.push(newProduct);
            // console.log(arr);
           
        }
else{
  // const newProduct=data;
  newProduct.id=(arr[len-1].id)+1;
  // arr.push(newProduct);
  
}
arr.push(newProduct);
fsPromises.writeFile("./data.json",JSON.stringify(arr));

res.json({
  status:'succes',
  results:1,
  data:{
    newProduct:newProduct, 
  }
})
});

app.put('/api/products/:id',async(req,res)=>{
//console.log(req);
const arr=JSON.parse(await fsPromises.readFile("./data.json","utf-8"))
res.send("work in progress");
const reqId=parseInt(req.params.id);
const data=req.body;
const newArr=arr.map((elem)=>{
  if(elem.id=reqId)return data;
  else return elem;
})
//console.log(data);
fsPromises.writeFile("./data.json",JSON.stringify(newArr));
});


app.delete('/api/products/:id',async(req,res)=>{
  const arr=JSON.parse(await fsPromises.readFile("./data.json","utf-8"))
  const newArr=arr.filter((elem)=>{
    if(elem.if==reqId)return false;
    else return true;
});
fsPromises.writeFile("./data.json",JSON.stringify(newArr));
res.status(204);
res.json({
  status:"succes",
  data:{
    newProduct:null,
  }
})
});
app.listen(1400);