const shoesList = ["addidas", "nike", "puma", "chanel", "LV"];
// console.log(shoesList)
const shoesList2 = shoesList.unshift("primark");
// console.log(shoesList);
// console.log(shoesList2);
const shoesList3 = shoesList.shift();
// console.log(shoesList);
// console.log(shoesList3);
const addEndMark = shoesList.push("new marque");
// console.log(shoesList);
// console.log(addEndMark)
const deleteEndMark = shoesList.pop();
// console.log(shoesList);
// console.log(deleteEndMark);
const sliceMark = shoesList.slice(2, 5);
// console.log(shoesList);
// console.log(sliceMark);
// console.log(sliceMark.length);

const newShoesList = ["balmain", "dior", "ysl", "jimmyShoes", "manalo"];

const concatList = sliceMark.concat(newShoesList);
console.log(concatList);
console.log(concatList.length);
