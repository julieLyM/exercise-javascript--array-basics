const shoesList = ["addidas", "nike", "puma", "chanel", "LV"];

// ***************filter
const filterArray = shoesList.filter(function(e) {
  return e.length > 5;
});
console.log(filterArray);

// ************find
const findArray = shoesList.find(function(e) {
  return e.length < 4;
});
console.log(findArray);
