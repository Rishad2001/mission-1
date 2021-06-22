const array1=[1,2,3,4,5,6,7];
//for adding to last
array1.push(6);

console.log(array1);
// for removing from last
array1.pop();
console.log(array1);
//for adding to first 
array1.unshift(5);
console.log(array1);
//for removing from first
array1.shift();
console.log(array1);

const ggg={
    food: 123,
    ded:12346,
};
//arrow function
const das=() => {console.log("abc");};
das()

//for every element
array1.forEach((element) =>
   // console.log(element));
   console.log(element + 6))  
    console.log("---------------------------------------------------");

//----------------------map----------------    
 array1.map((element) => 
 console.log(element + 6))
//-----------function------------
 const ggf = {
     name: 2,
     class: 2 ,
     swc: 1,
 };
 svg=0;
 const ff=(item) => {
    return (svg+=item);
 } 

 ff(ggf.class);
 ff(ggf.class);
 ff(ggf.class);
 ff(ggf.class);
 ff(ggf.class);
 ff(ggf.class);
   
 ff(ggf.class);
 ff(ggf.class);
 ff(ggf.class);
 ff(ggf.class);
 ff(ggf.class);
 ff(ggf.class);
 console.log(svg);
 