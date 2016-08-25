// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different item prices
  var condimentsPrices = {
  	condimentsA: 0.1,
  	condimentsB: 0.1, 
  	condimentsC: 0.1, 
  	noCondiments: 0
  };
  var condimentsToppingPrice = 0;

  // Augment the original object with another method
  maker.addCondiments = function(choice) {
  	if (choice in condimentsPrices){
	  	condimentsToppingPrice = condimentsPrices[choice];
  	}
  };
  maker.getCondimentsToppingPrice = function() {
  	return condimentsToppingPrice;
  };


  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});