var prices = items.map(function(currentItem, index, array){
  return currentItem.price;
});
var priceSum = prices.reduce(function(a,b){
  return a+b;
});
function priceAvg(prices){
  return priceSum/prices.length;
}
