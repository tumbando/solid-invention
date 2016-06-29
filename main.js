var prices = items.map(function(currentItem, index, array) {
    return currentItem.price;
});

var priceSum = prices.reduce(function(a, b) {
    return a + b;
});

function priceAvg(prices) {
    return priceSum / prices.length;
}
//--------------------------------------------------------------------
var priceRange = items.filter(function(currentItem, index, array) {
    if (currentItem.price >= 14.00 && currentItem.price <= 18.00) {
        return currentItem.price;

    }
});
//--------------------------------------------------------------------
