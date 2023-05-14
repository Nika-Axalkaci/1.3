// function sum(n1, n2, ...args) {
//   let arr = [];
//   let result = 0;
//   arr.push(n1 + n2);
//   for (let i of args) {
//     result += i;
//   }
//   arr.push(result);
//   return arr;
// }

// console.log(sum(1, 4, 3, 4, 5, 6, 7, 8, 8));

// function dest({banks:[, ,{address:{city = ""}}]}){
//   return city

// }
function cloneObj(obj) {
  return { ...obj };
}
const obje = {
  name: "nika",
  age: 54,
  nick: {
    lastname: "axalkaci",
    la: {
      rim: 40,
    },
  },
  arr: [1, 2, 3],
};
console.log(cloneObj(obje));
console.log(obje);
