// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different item prices
  var veggiesPrices = {
  	tomato: 0.2,
  	lettuce: 0.2, 
  	greenpepper: 0.2, 
  	noVeggies: 0
  };
  var veggiesToppingPrice = 0;

  // Augment the original object with another method
  maker.addVeggies = function(choice) {
  	if (choice in veggiesPrices){
	  	veggiesToppingPrice = veggiesPrices[choice];
  	}
  };
  maker.getVeggiesToppingPrice = function() {
  	return veggiesToppingPrice;
  };


  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});