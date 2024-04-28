//this is the one way to get result by changing it 
//into string
// const fs = require('node:fs');

// const data = fs.readFileSync('./myread.txt');
// console.log(data);

// console.log(data.toString());


// //second method to tell that it is string by encoding way
// //using command utf8
// // const fs = require('node:fs');
// const fs = require('node:fs'); //like this also
// const data = fs.readFileSync('./myread.txt',{encoding:'utf8'});
// console.log(data);



// BUFFERRRRRRRRRRRRRRRRRRRR
// const b= new Buffer.from('ABCD');
// b.write('other');
// console.log(b.toString());



// const fs = require('fs');
// FileSystem.writeFileSync('./myread.txt',"10th april 2024:day7");
// console.log(data);


// const fs = require('fs');
// console.log("start");
// const data = fs.readFileSync('./myread.txt',{encoding:'utf8'});
// console.log(data);
// console.log("end");


//promises in file system
// const fsPromises = require('fs/promises');
// console.log("start")
// const pr = fsPromises.readFile("./myread.txt",{encoding:'utf8'});
// console.log(pr)
// pr.then((res)=>{
//     console.log(res);
// })
// console.log("end");



//callback in file system
// const fs = require('fs');

// fs.readFile('./myread.txt',{encoding:'utf8'},(err,data)=>{
//     console.log(data);
// });



//http://localhost:1400/

const http = require('http');
const fs=require('fs');
const data=fs.
const htmlTemplate=`
<!DOCTYPE html>
<html>
<head>
<style></style>

</head>
<body>
    ....PRODUCT CARDS....
</body>
</html>

`
const cardTemplate=`
<div class='product-card'>
<h4>_TITLE_</h4>
<p>_INFO_</p>
</div>
`
const card1 = cardTemplate.replace('_TITLE_','XIOMI Note 11 pro')
.replace('_INFO_','this is the chinese mobile');

const card2 = cardTemplate.replace('_TITLE_','iphone Note 11 pro')
.replace('_INFO_','this is the  mobile');

const allcard=card1+card2
console.log("\n:card1",card1)
console.log("\n:card2",card2)


const page = htmlTemplate.replace('_PRODUCT_CARDS_',card1);
const app = http.createServer((req,res)=>{
// console.log("request received");
console.log(req.url);
res.writeHead(200,{'content-type':'text/html',})
res.end (page);
// res.end;   //('<h2>hello!</h2>')
 });
app.listen(2200,()=>{
console.log("..........server started......."); 
//greater than 1000 lesser than 9999
});



////port mistake
//convert json to object 
//object into json
