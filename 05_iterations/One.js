// for
// for (let index = 0; index < 10; index++) {
//     const element = index
//     if (element==5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }
// console.log(elemrnt);

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outerloop value ${i}`);
//     for (let j = 0; j <= 10; j++) {
// // console.log(`Innner loop value ${j} and inner loop ${i}`);        
// // console.log(i+"+"+j+"-"+"="+i+j);    
// }   
// }

// let myArray=["flash","batman","superman"]
// console.log(myArray.length);
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
    
// }

// break and continue
// for (let i = 0; i <= 20; i++) {
//     if (i==5) {
//         console.log("5 detected");
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }
for (let i = 0; i <= 20; i++) {
    if (i==5) {
        console.log("5 detected");
        continue;
    }
    console.log(`value of i is ${i}`);
}