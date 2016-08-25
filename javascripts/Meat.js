// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different item prices
  var meatPrices = {
  	beef: 1.4,
  	turkey: 1.0, 
  	bacon: 1.2, 
  	noMeat: 0
  };
  var meatToppingPrice = 0;

  // Augment the original object with another method
  maker.addMeat = function(choice) {
  	if (choice in meatPrices){
	  	meatToppingPrice = meatPrices[choice];
  	}
  };
  maker.getMeatToppingPrice = function() {
  	return meatToppingPrice;
  };


  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});