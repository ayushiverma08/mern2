// const express=require('express');
// const fsPromises=require("fs/promises");
// const productController = require('./Controller/productsController.js');
// const userController = require('./Controller/userController.js');
// // const fs=require('fs');
// const app=express();
// //middleware
// app.use(express.json());

// app.use((req,res,next)=>{
//     //console.log('Request,Received...');
//     const time= new Date().toLocaleString();
//     fsPromises.writeFile('./log.txt',req.url+'\t'+time+'\n');
//     next();
// });


// const productRouter = express.Router();
// const userRouter = express.Router();

// app.use('/api/pro')
// // app.route('/api/products')
// // .get(productController.getAllproducts)
// // .post(productController.addProducts);

// // app.route('/api/products/:id')
// // .put(productController.replaceproducts)
// // .delete(productController.deleteproducts);

// // app.route('/api/user')
// // .get(userController.getAlluser)
// // .post(userController.replaceuser)
// // .put(userController.adduser)
// // .delete(userController.deleteuser);


// app.get('/api/products',async(req,res)=>
// {
//     // const data=fs.readFileSync('./data.json',"utf8")
    
//      const data= await fsPromises.readFile('./data.json',"utf8")
//     const arr=JSON.parse(data);
//     res.json({
//         status:'succes',
//         results:arr.length,

//         data:{
//             products:arr,
//         }
//     });


// });
//     app.post('/api/products',async(req,res)=>
//     {
//        const data=req.body;
//     //    data.id=121;
//     //     res.send(data);

//         const db= await fsPromises.readFile("./data.json","utf8");
//         const arr=JSON.parse(db);
//         const len=arr.length;
//         const newProduct=data;
//         if(len==0)
//         {
//           newProduct.id=1;
//             // data.id=1
//             // arr.push(newProduct);
//             // console.log(arr);
           
//         }
// else{
//   // const newProduct=data;
//   newProduct.id=(arr[len-1].id)+1;
//   // arr.push(newProduct);
  
// }
// arr.push(newProduct);
// fsPromises.writeFile("./data.json",JSON.stringify(arr));

// res.json({
//   status:'succes',
//   results:1,
//   data:{
//     newProduct:newProduct, 
//   }
// })
// });

// app.put('/api/products/:id',async(req,res)=>{
// //console.log(req);
// const arr=JSON.parse(await fsPromises.readFile("./data.json","utf-8"))
// res.send("work in progress");
// const reqId=parseInt(req.params.id);
// const data=req.body;
// const newArr=arr.map((elem)=>{
//   if(elem.id=reqId)return data;
//   else return elem;
// })
// //console.log(data);
// fsPromises.writeFile("./data.json",JSON.stringify(newArr));
// });


// app.delete('/api/products/:id',async(req,res)=>{
//   const arr=JSON.parse(await fsPromises.readFile("./data.json","utf-8"))
//   const newArr=arr.filter((elem)=>{
//     if(elem.if==reqId)return false;
//     else return true;
// });
// fsPromises.writeFile("./data.json",JSON.stringify(newArr));
// res.status(204);
// res.json({
//   status:"succes",
//   data:{
//     newProduct:null,
//   }
// })
// });
// app.get('/api/users',(req,res)=>{
//     res.status(501);
//     res.json({
//         status:'fail',
//         Message:'Route is not implemented',
//     });
// })

// app.post('/api/users',(req,res)=>{
//     res.status(501);
//     res.json({
//         status:'fail',
//         Message:'Route is not implemented',
//     });
// })

// app.put('/api/users',(req,res)=>{
//     res.status(501);
//     res.json({
//         status:'fail',
//         Message:'Route is not implemented',
//     });
// })

// app.delete('/api/users',(req,res)=>{
//     res.status(501);
//     res.json({
//         status:'fail',
//         Message:'Route is not implemented',
//     });
// })

// app.listen(1400);





// const express=require('express');
// // const fs=require('fs');
// //const app=express();

// //const fsPromises=require("fs/promises");
// //middleware
// const productController=require('./Controller/productsController.js');
// const productRouter = express.Router();


// productRouter.Route('/');
// .get(productController.getAllProducts)
// .post(productController.deleteProduct)
// module.exports= productRouter;
// //const userController=require('./Controller/userController.js');




// // app.use(express.json());

// // app.use((req,res,next)=>{
// //     //console.log('Request,Received...');
// //     const time= new Date().toLocaleString();
// //     fsPromises.writeFile('./log.txt',req.url+'\t'+time+'\n');
// //     next();
// // });

// // const productRouter=express.Router();
// // const userRouter=express.Router();

// // app.use('/api/products',productRouter)
// // app.use('/api/products/:id',userRouter)
// // productRouter.route('/')
// // .get(productController.getAllProducts)
// //  .post(productController.addProduct)

// //  productRouter.route('/:id')
// //  .put(productController.replaceProduct)
// //  .delete(productController.deleteProduct)

// // // app.route('/api/products')
// // // .get(productController.getAllProducts)
// // // .post(productController.addProduct)

// // // app.route('/api/products/:id')
// // // .put(productController.replaceProduct)
// // // .delete(productController.deleteProduct)

// // // app.route('/api/users')
// // // .get(userController.getUser)
// // // .post(userController.addUser)
// // // .put(userController.replaceUser)
// // // .delete(userController.deleteUser)


// // // app.get(/api/products',productController.getAllProducts);

// // // app.post('/api/products',productController.addProduct);

// // // app.put('/api/products/:id',productController.replaceProduct);
// // //  app.delete('/api/products/:id',productController.deleteProduct);

// // // app.get('/api/users',userController.getUser);
// // // app.post('/api/users',userController.addUser);
// // // app.put('/api/users',userController.replaceUser);
// // // app.delete('/api/users',userController.deleteUser);



//  app.listen(1400);


// const express=require('express');
// // const fs=require('fs');
// const app=express();

// const fsPromises=require("fs/promises");
// //middleware
// const productController=require('./Controller/productsController.js');

// const userController=require('./Controller/userController.js');




// app.use(express.json());

// app.use((req,res,next)=>{
//     //console.log('Request,Received...');
//     const time= new Date().toLocaleString();
//     fsPromises.writeFile('./log.txt',req.url+'\t'+time+'\n');
//     next();
// });

// const productRouter=express.Router();
// const userRouter=express.Router();

// app.use('/api/products',productRouter)
// app.use('/api/products/:id',userRouter)
// productRouter.route('/')
// .get(productController.getAllProducts)
//  .post(productController.addProduct)

//  productRouter.route('/:id')
//  .put(productController.replaceProduct)
//  .delete(productController.deleteProduct)

// // app.route('/api/products')
// // .get(productController.getAllProducts)
// // .post(productController.addProduct)

// // app.route('/api/products/:id')
// // .put(productController.replaceProduct)
// // .delete(productController.deleteProduct)

// // app.route('/api/users')
// // .get(userController.getUser)
// // .post(userController.addUser)
// // .put(userController.replaceUser)
// // .delete(userController.deleteUser)


// // app.get(/api/products',productController.getAllProducts);

// // app.post('/api/products',productController.addProduct);

// // app.put('/api/products/:id',productController.replaceProduct);
// //  app.delete('/api/products/:id',productController.deleteProduct);

// // app.get('/api/users',userController.getUser);
// // app.post('/api/users',userController.addUser);
// // app.put('/api/users',userController.replaceUser);
// // app.delete('/api/users',userController.deleteUser);



// app.listen(1400);



const express=require('express');
// const fs=require('fs');
const app=express();

const fsPromises=require("fs/promises");
//middleware
const productController=require('./Controller/productsController.js');

const userController=require('./Controller/userController.js');

const productRouter=express.Router();

const userRouter=express.Router();


app.use(express.json());

app.use((req,res,next)=>{
    //console.log('Request,Received...');
    const time= new Date().toLocaleString();
    fsPromises.writeFile('./log.txt',req.url+'\t'+time+'\n');
    next();
});



app.use('/api/products',productRouter)


// productRouter.route('/')
// .get(productController.getAllProducts)
//  .post(productController.addProduct)

//  productRouter.route('/:id')
//  .put(productController.replaceProduct)
//  .delete(productController.deleteProduct)

// app.route('/api/products')
// .get(productController.getAllProducts)
// .post(productController.addProduct)

// app.route('/api/products/:id')
// .put(productController.replaceProduct)
// .delete(productController.deleteProduct)

// app.route('/api/users')
// .get(userController.getUser)
// .post(userController.addUser)
// .put(userController.replaceUser)
// .delete(userController.deleteUser)


// app.get(/api/products',productController.getAllProducts);

// app.post('/api/products',productController.addProduct);

// app.put('/api/products/:id',productController.replaceProduct);
//  app.delete('/api/products/:id',productController.deleteProduct);

// app.get('/api/users',userController.getUser);
// app.post('/api/users',userController.addUser);
// app.put('/api/users',userController.replaceUser);
// app.delete('/api/users',userController.deleteUser);



app.listen(1400);