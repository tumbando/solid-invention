var prices = items.map(function(currentItem, index, array){
  return currentItem.price;
});
var priceSum = prices.reduce(function(a,b){
  return a+b;
});
var priceAvg = (priceSum/prices.length);
console.log(priceAvg);
//priceSum divided by number of elements in priceSum array


// var namesOnly = people.map(function(currentItem, index, array) {
//   return currentItem.name;
// });
// console.log('5', namesOnly);
