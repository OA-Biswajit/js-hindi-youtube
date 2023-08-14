const myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }
const programming =["js","rs","py","java","cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
// }

const map =new Map()
map.set("IN","India")
map.set("USA","United State Of America")
map.set("Fr","France")
map.set("Fr","France")

// for (const key in map) {
//     console.log(map[key]);
// } not working

console.log(map);

for (const key of map) {
    console.log(key);
}

// for (const [key,value] of map) {
// console.log(key,":-",value);    
// }
