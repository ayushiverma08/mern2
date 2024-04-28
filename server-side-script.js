// // // file module


// // const fs=require("fs");
// // //http module
// // const http=require("http");
// // const url = require('node:url');

// // const data=fs.readFileSync("./data.json","utf-8");
// // //change string to json
// // const dataObj=JSON.parse(data).products;

// // //for search button
// // const inputElement=`
// // <form action='/product'>
// // <input type="text" name="productName"
// // <button type="submit">Search</button>
// // </form>
// // `




// // // console.log(dataObj);

// // const nav=
// // `
// // <style>
// // body{
    
    
// //      border: 1px solid black;
// //      margin: 0; 
// //      padding: 0; 

// // }
// //   header{
        
// //          height:8vh;
// //          width:100vw;
// //          background-color:aqua;
// //          padding:10px;
// //          border-radius:2px;
   

// //   }
// // h2{
// //     color: black;
// //     text-align:center;
// //     margin:0;
// //     padding:5px;
// // }
// // button{
// //     color: black;
// //     text-align:center;
// //     margin:0;
// //     padding:5px;
// // }
    
// // </style>
// // <body>
// // <header><h2>Mobiles</h2></header>
// // <button>home</button>
// // <button>About Us</button>

// // </body>
// // </html>


// // `

// // const cardTemplate=

// // `
// // <!DOCTYPE html>
// // <html>
// // <head>

// // <style>
// // body{
// //     display:flex;
// //     flex-direction:column;
 
// //     align-items: center; 
// //     width:fit-content
 
// // }

// // .products{
       
// //         background-color:yellow;
// //         border-radius:100px;
// //         border: 1px solid black;
// //         padding:20px;
// //         margin: 20px;
       
// //         }
// // img{
// //      border:1px solid black;
// //      border-radius:150px;
    
// //     }
   
// //    a{
// //     text-decoration:none;
// //    color:red;
// //     }

// //    h3{
// //     background-color:black;
// //     color:white;
// //     border-radius:10px;
// //     text-align:center;
// //     padding:30px;
// //    }
// // </style>
// // </head>
// // <body>

// // <div class='products'>
// //    <h3> $TITLE$ </h3><br>
// //    <img src="$img-src$" alt="product-image"/><br>
// //    <a href="products-link">More Info</a>

// //    </div>
// //    </body>
// //    </html>
// //    `



// //    let result=[];
// //    for(let i=0;i<dataObj.length;i++)
// //    {
// //     let temp=cardTemplate;
// //     temp=temp.replace(' $TITLE$',dataObj[i].title);
// //     temp=temp.replace('$img-src$',dataObj[i].images[0]);
// //     temp=temp.replace('products-link',`/products?id=${i}`);
// //     // temp=temp.replace('INFO',dataObj[i].description);
// //     result.push(temp);
// //    }

// // // joining 
// // result=result.join('');
// // // create server
// //  const server=http.createServer((req,res)=>{
 
// //  //search option
 
// //     res.writeHead(200,{
// //     'content-type':'text/html',
// //   });
// //     // console.log(route);

// //     //destructuring(true is used for parsing query)
// //     const {pathname,query}=url.parse(req.url,true);
   
   
// //     console.log(pathname);
// //     if(pathname=='/home'){
// //         res.end(inputElement+result);
// //         const pageContent = nav + result;

// //         res.end(pageContent);
// //     }

// //    else if(pathname=='/products'){
// //     //search box
// //      const id=query.id;
// //     const pathname=query.productName;
// // if(id){
// //     const item=product[id-1];
// // if (pathname)
// // {
// //     const searchNameResult = dataObj.filter((elem)=>{
// //         if(elem.title.includes(pathname)){
// //             return true;
// //         }
// //         else{
// //             false;
// //         }
// //     })
// //     res.end(JSON.stringify(searchNameResults));
// // }



// //     // const item= dataObj[id];
// //     // console.log(item);
// //         // res.end(productdata.title);
// //         res.end(
// //             `
// //             <!DOCTYPE html>
// //            <html>
// //             <head>
// //              <style>
// //              body{
// //                 display:flex;
// //                 flex-direction:column;
// //                 align-items:center;
// //                 justify-content:center;
              
               
// //              }
// //              h3{
// //                 text-align:center;
// //              }
// //              .details{
// //                 background-color:aqua;
// //                 border:1px solid black;
// //                 padding:10px;
// //                 border-radius:10px;
                
// //              }
// //              img{
// //                 border:1px solid black;
// //                 border-radius:10px;
// //              }
// //              </style>
// //              </head>
// //             <div class=details>
// //                 <h3>${item.title}</h3>
// //                 <img src="${item.images[0]}" />
// //                 <p>${item.description}</p>
// //                 <h5> Price is :$${item.price} </h5>
// //                 <h5>Brand: ${item.brand}</h5>
// //                 <h5>Stock: ${item.stock}</h5>
// //                 </div>
// //             `
// //         )}
// //     }
// //     else{
// //         res.end("Error 404! result not found");
// //     }
// //     // res.end(result);

// //  });

// //  server.listen(5500, ()=>{
// //     console.log('http://localhost:5500')
// //  });

































// //    //    const result=[];
// // //    for(let i=0;i<dataObj.length;i++)
// // //    {
// // //     result.push(cardTemplate);
// // //    }

// // //    console.log(result);




// // // for search tag
// // //<form action="/search" method="GET">
// // /* <input type="text" name="query" placeholder="Search...">
// // <button type="submit">Search</button> */






// // file module
// const fs=require("fs");
// //http module
// const http=require("http");
// const url = require('node:url');
// const { stringify } = require("querystring");

// const data=fs.readFileSync("./data.json","utf-8");
// //change string to json
// const dataObj=JSON.parse(data).products;

// const inputElement=
// `<form action='/product'>
// <input type="text" name="productName"/>
// <button type="submit">Search</button>
//     </form>
//     `


// // console.log(dataObj);

// const nav=
// `
// <style>
// body{
    
    
//      border: 1px solid black;
//      margin: 0; 
//      padding: 0; 

// }
//   nav{
        
//          height:8vh;
//          width:100vw;
//          background-color:aqua;
//          padding:10px;
//          border-radius:2px;
   

//   }
//   ul{
//     list-style-type: none;
//     margin :10px;
//     }
//     li{
//         float:right;
//         display:grid;
//         flex-direction:column;
//         flex-wrap:wrap;
//         justify-content:space-between;
//         padding:4px;
//     }
// h2{
//     color: black;
//      text-align:center;
//     margin:0;
//     padding:5px;

// }
// .search{
// margin:auto 5px;;
// padding:5px;

// }
    


// </style>
// <body>
// <nav>
// <div>

// </nav>
// </body>
// </html>


// `

// const cardTemplate=

// `
// <!DOCTYPE html>
// <html>
// <head>

// <style>
// body{
//     display:flex;
//     flex-direction:column;
 
//     align-items: center; 
//     width:fit-content
 
// }

// .products{
       
//         background-color:aqua;
//         border-radius:10px;
//         border: 1px solid black;
//         padding:20px;
//         margin: 20px;
       
        
    
       
//         }
// img{
//      border:1px solid black;
//      border-radius:10px;
//     }
   
//    a{
//     text-decoration:none;
//    color:red;
//     }

//    h3{
//     background-color:black;
//     color:white;
//     border-radius:10px;
//     text-align:center;
//     padding:30px;
//    }
// </style>
// </head>
// <body>

// <div class='products'>
//    <h3> $TITLE$ </h3><br>
//    <img src="$img-src$" alt="product-image"/><br>
//    <a href="products-link">More Info</a>

//    </div>
//    </body>
//    </html>
//    `


//    let result=[];
//    for(let i=0;i<dataObj.length;i++)
//    {
//     let temp=cardTemplate;
//     temp=temp.replace(' $TITLE$',dataObj[i].title);
//     temp=temp.replace('$img-src$',dataObj[i].images[0]);
//     temp=temp.replace('products-link',`/products?id=${i}`);
//     // temp=temp.replace('INFO',dataObj[i].description);
//     result.push(temp);
//    }

// // joining 
// result=result.join('');
// // create server
//  const server=http.createServer((req,res)=>{

//     res.writeHead(200,{
//         'content-type':'text/html'
//     });
  
//     // console.log(route);

//     //destructuring(true is used for parsing query)
//     const {pathname,query}=url.parse(req.url,true);
   
   
//     console.log(pathname);
//     if(pathname=='/home'){
//         const pageContent = inputElement + result;

//         res.end(pageContent);
//     }

//    else if(pathname=='/product'){
//     // const id=query.id;
//     // const item= dataObj[id];
//     const pName=query.productName;
//     if(pName)
//     {
//         const searchNameResults=dataObj.filter((elem)=>{
//             if(elem.title.includes(pName)){
//                  return true;
//             }
//             else{
//                return  false;
//             }
//         })
//         res.end(JSON.stringify(searchNameResults));
     
//     }
//     else{
//         res.end("Error");
//     }
// }
// });

//     // if(id)
//         // res.end(productdata.title);
//         // res.end(
//         //     `
//         //     <!DOCTYPE html>
//         //    <html>
//         //     <head>
//         //      <style>
//         //      body{
//         //         display:flex;
//         //         flex-direction:column;
//         //         align-items:center;
//         //         justify-content:center;
              
               
//         //      }
//         //      h3{
//         //         text-align:center;
//         //      }
//         //      .details{
//         //         background-color:aqua;
//         //         border:1px solid black;
//         //         padding:10px;
//         //         border-radius:10px;
                
//         //      }
//         //      img{
//         //         border:1px solid black;
//         //         border-radius:10px;
//         //      }
//         //      button{
//         //         border-radius:5px;
//         //         background-color:maroon;
//         //         color:white;
              
//         //      }
//         //      </style>
//         //      </head>
//         //     <div class=details>
//         //         <h3>${item.title}</h3>
//         //         <img src="${item.images[0]}" />
//         //         <p>${item.description}</p>
//         //         <h5> Price is :$${item.price} </h5>
//         //         <h5>Brand: ${item.brand}</h5>
//         //         <h5>Stock: ${item.stock}</h5>

//         //         <a href="http://localhost:3000/home"><button>Home</button></a>
//         //         </div>
//         //     `
//     //     )
//     // else{
//     //     res.end("Error");
//     // }
//     // }
//     // else{
//     //     res.end("Error 404!   result not found");
//     // }
//     // res.end(result);

//  server.listen(3000,()=>{
//     console.log("....server start....");
//  });

// file module
const fs=require("fs");
//http module
const http=require("http");
const url = require('node:url');
const { stringify } = require("querystring");

const data=fs.readFileSync("./data.json","utf-8");
//change string to json
const dataObj=JSON.parse(data).products;

const inputElement=
`<form action='/product'>
<input type="text" name="productName"/>
<button type="submit">Search</button>
    </form>
    `


// console.log(dataObj);

const nav=
`
<style>
body{
    
    
     border: 1px solid black;
     margin: 0; 
     padding: 0; 

}
  nav{
        
         height:8vh;
         width:100vw;
         background-color:aqua;
         padding:10px;
         border-radius:2px;
   

  }
  ul{
    list-style-type: none;
    margin :10px;
    }
    li{
        float:right;
        display:grid;
        flex-direction:column;
        flex-wrap:wrap;
        justify-content:space-between;
        padding:4px;
    }
h2{
    color: black;
     text-align:center;
    margin:0;
    padding:5px;

}
.search{
margin:auto 5px;;
padding:5px;

}
    


</style>
<body>
<nav>
<div>

</nav>
</body>
</html>


`

const cardTemplate=

`
<!DOCTYPE html>
<html>
<head>

<style>
body{
    display:flex;
    flex-direction:column;
 
    align-items: center; 
    width:fit-content
 
}

.products{
       
        background-color:aqua;
        border-radius:10px;
        border: 1px solid black;
        padding:20px;
        margin: 20px;
       
        
    
       
        }
img{
     border:1px solid black;
     border-radius:10px;
    }
   
   a{
    text-decoration:none;
   color:red;
    }

   h3{
    background-color:black;
    color:white;
    border-radius:10px;
    text-align:center;
    padding:30px;
   }
</style>
</head>
<body>

<div class='products'>
   <h3> $TITLE$ </h3><br>
   <img src="$img-src$" alt="product-image"/><br>
   <a href="products-link">More Info</a>

   </div>
   </body>
   </html>
   `


   let result=[];
   for(let i=0;i<dataObj.length;i++)
   {
    let temp=cardTemplate;
    temp=temp.replace(' $TITLE$',dataObj[i].title);
    temp=temp.replace('$img-src$',dataObj[i].images[0]);
    temp=temp.replace('products-link',`/products?id=${i}`);
    // temp=temp.replace('INFO',dataObj[i].description);
    result.push(temp);
   }

// joining 
result=result.join(' ');
// create server
 const server=http.createServer((req,res)=>{

    res.writeHead(200,{
        'content-type':'text/html'
    });
  
    // console.log(route);

    //destructuring(true is used for parsing query)
    const {pathname,query}=url.parse(req.url,true);
   
   
    console.log(pathname);
    if(pathname=='/home'){
        const pageContent = inputElement + result;

        res.end(pageContent);
    }

   else if(pathname=='/product'){
    // const id=query.id;
    // const item= dataObj[id];
    const pName=query.productName;
    if(pName)
    {
        const searchNameResults=dataObj.filter((elem)=>{
            if(elem.title.includes(pName)){
                 return true;
            }
            else{
               return  false;
            }
        })
        res.end(JSON.stringify(searchNameResults));
     
    }
    else{
        res.end("Error");
    }
}
});

    // if(id)
        // res.end(productdata.title);
        // res.end(
        //     `
        //     <!DOCTYPE html>
        //    <html>
        //     <head>
        //      <style>
        //      body{
        //         display:flex;
        //         flex-direction:column;
        //         align-items:center;
        //         justify-content:center;
              
               
        //      }
        //      h3{
        //         text-align:center;
        //      }
        //      .details{
        //         background-color:aqua;
        //         border:1px solid black;
        //         padding:10px;
        //         border-radius:10px;
                
        //      }
        //      img{
        //         border:1px solid black;
        //         border-radius:10px;
        //      }
        //      button{
        //         border-radius:5px;
        //         background-color:maroon;
        //         color:white;
              
        //      }
        //      </style>
        //      </head>
        //     <div class=details>
        //         <h3>${item.title}</h3>
        //         <img src="${item.images[0]}" />
        //         <p>${item.description}</p>
        //         <h5> Price is :$${item.price} </h5>
        //         <h5>Brand: ${item.brand}</h5>
        //         <h5>Stock: ${item.stock}</h5>

        //         <a href="http://localhost:3000/home"><button>Home</button></a>
        //         </div>
        //     `
    //     )
    // else{
    //     res.end("Error");
    // }
    // }
    // else{
    //     res.end("Error 404!   result not found");
    // }
    // res.end(result);

 server.listen(3000,()=>{
    console.log("...server started...");
 });

