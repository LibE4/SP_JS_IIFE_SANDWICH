// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different item prices
  var breadPrices = {
  	brownBread: 0.2,
  	whiteBread: 0.2, 
    noBread: 0
  };
  var breadToppingPrice = 0;

  // Augment the original object with another method
  maker.addBread = function(choice) {
  	if (choice in breadPrices){
	  	breadToppingPrice = breadPrices[choice];
  	}
  };
  maker.getBreadToppingPrice = function() {
  	return breadToppingPrice;
  };


  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});