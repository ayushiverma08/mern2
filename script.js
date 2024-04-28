// let a= new String("hello");
// let b = "hello"
// if(a==b)
//   {
//     console.log("yes");
//   } 
//   else{
//     console.log("no");
//   }



// const obj={
//   "name":"ajay",
//   "last-name":"singh"
// }
// const str = JSON.stringify(obj);
// document.write(str);
//let mai reassissgnment is not allowed but with constt reasssignment is not allowed
//in constt inside a block everything is fixed


//array
// let arr=[1,2,3,4];
// arr=[3,4];
// arr[1]=20;
// arr[10]=20;
// console.log(arr);
// arr.push(0);
// arr.pop();
// arr.shift();//delete the elment from starting
// arr.unshift(0);//adding the lment from starting

// console.log(arr);
// console.log(arr.length);

// const obj={
//       "name":"ajay",
//       "last-name":"singh"
//     }
//     let arr=[1,2,3,4];
//     arr[2]=4;
//     console.log(typeof(obj));
//     console.log(typeof(arr));
//     console.log(Array.isArray(obj));
//     console.log(Array.isArray(arr));


// //checking what dunction is array or not
//     function myFunction(h) {
//         if (Array.isArray(h))
//         {
//             console.log("it is array not object");
//         }
//         else if(typeof[x]=="object"){
//             console.log("object");
//         }
//         else{
//             console.log(" not object");
//         }
//       }
//     myFunction([1,2,3,4]);
//     myFunction("hello");
//     myFunction(typeof(obj));//typeof array is also object
//     myFunction(typeof(arr));


//looping
// const arr = ['name',2,true];
// const obj={
// 'name':"ajay",age:20,
// };
// // for(let i=0;i<4;i++)
// // {
// //     console.log(i);
// // }
// // for(let i of arr){
// //     console.log(i);
// // }
// for(let i in obj ){
//     console.log(i);
// }


//DOM
// window.console.log(window)
// window.console.log(window.innerHeight)
// window.console.log(window.innerWidth)


// console.log(window.document)
// console.log(window)

// console.log(window.document)
// console.log(window)
// console.dir(window.document)
// console.dir(window)


// const res = document.getElementsByTagName('h3');
// console.log(res);

// const res = document.getElementById('ht1');
// console.log(res);
//only one can be return by function elementbyid
//we hav eto mention id on html page for accessing

// const res = document.querySelectorAll('div>h3');
// console.log(res);
//make class in html for accessing

// const res = document.getElementById("ht1")
// console.log(res);



//not possible to change the tag name
// const res = document.getElementsByTagName("p")
// console.log(res);
// res[0].tagName = "h2"

//not possible to chane the tag name
// const res = document.getElementsByTagName("p")
// console.log(res);
// s[0].setattribute('class','c1');


// const ne= document.createElement("h2");
// ne.innerText = "dynamic text";
// // console.log(ne);
// document.body.appendChild(ne);


const ne= document.createElement("h2");
ne.innerText = "dynamic text";
// console.log(ne);
const firstdiv = document.getElementById('ht');
firstdiv.appendChild(ne);


const w = document.getElementById('ht2');
w.remove();







































