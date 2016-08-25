// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different item prices
  var cheesePrices = {
  	cheeseA: 1.4,
  	cheeseB: 1.0, 
  	cheeseC: 1.2, 
  	noCheese: 0
  };
  var cheeseToppingPrice = 0;

  // Augment the original object with another method
  maker.addCheese = function(choice) {
  	if (choice in cheesePrices){
	  	cheeseToppingPrice = cheesePrices[choice];
  	}
  };
  maker.getCheeseToppingPrice = function() {
  	return cheeseToppingPrice;
  };


  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});