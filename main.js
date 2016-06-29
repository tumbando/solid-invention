var prices = items.map(function(currentItem, index, array) {
    return currentItem.price;
});

var priceSum = prices.reduce(function(a, b) {
    return a + b;
});

function priceAvg(prices) {
    return priceSum / prices.length;
}

// function renderContent(whatContent) {
//   document.querySelector('.answerBox1 p').textContent = items[whatContent].title;
// }
// renderContent
//--------------------------------------------------------------------
var priceRange = items.filter(function(currentItem, index, array) {
    if (currentItem.price >= 14.00 && currentItem.price <= 18.00) {
        return currentItem.price;

    }
});
//--------------------------------------------------------------------

var currCodeGBP = items.filter(function(currentItem, index, array) {
  if (currentItem.currency_code==='GBP') {
    console.log(currentItem.title + ' ' + currentItem.currency_code);
    }
});
//--------------------------------------------------------------------

var madeOfWood = items.filter(function(currentItem, index, array) {
  if (currentItem.materials.indexOf('wood') !== -1) {
    return true;
  }
});
    console.log(madeOfWood);
//--------------------------------------------------------------------

var eightOrMore =  items.filter(function(currentItem, index, array){
  if (currentItem.materials.length >= 8){
    console.log(currentItem.title + ' ' + currentItem.materials.length + ' ' + currentItem.materials);

  }
});

//--------------------------------------------------------------------
var madeBySeller = items.filter(function(currentItem, index, array){
  if (currentItem.who_made === "i_did")
  {
    console.log(currentItem.title);
  }
});
