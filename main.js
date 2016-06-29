var prices = items.map(function(currentItem, index, array){
  return currentItem.price;
});
var priceSum = prices.reduce(function(a,b){
  return a+b;
});

console.log(priceSum);

// var namesOnly = people.map(function(currentItem, index, array) {
//   return currentItem.name;
// });
// console.log('5', namesOnly);
