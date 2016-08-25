// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference elements
var breadChooser = document.getElementById("bread");
var meatChooser = document.getElementById("meat");
var cheeseChooser = document.getElementById("cheese");
var condimentsChooser = document.getElementById("condiments");
var veggiesChooser = document.getElementById("veggies");
var displayOrderEmt = document.getElementById("sandwich");

displayOrderEmt.innerHTML = " Your sandwich order is:" + "<br>";

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  SandwichMaker.addBread(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
  SandwichMaker.addTopping(SandwichMaker.getBreadToppingPrice());
  displayOrderEmt.innerHTML += selectedTopping + " " + SandwichMaker.getBreadToppingPrice() + "<br>";
});

meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  SandwichMaker.addMeat(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
  SandwichMaker.addTopping(SandwichMaker.getMeatToppingPrice());
  displayOrderEmt.innerHTML += selectedTopping + " " + SandwichMaker.getMeatToppingPrice() + "<br>";
});

cheeseChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  SandwichMaker.addCheese(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
  SandwichMaker.addTopping(SandwichMaker.getCheeseToppingPrice());
  displayOrderEmt.innerHTML += selectedTopping + " " + SandwichMaker.getCheeseToppingPrice() + "<br>";
});

condimentsChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  SandwichMaker.addCondiments(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
  SandwichMaker.addTopping(SandwichMaker.getCondimentsToppingPrice());
  displayOrderEmt.innerHTML += selectedTopping + " " + SandwichMaker.getCondimentsToppingPrice() + "<br>";
});

veggiesChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  SandwichMaker.addVeggies(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
  SandwichMaker.addTopping(SandwichMaker.getVeggiesToppingPrice());
  displayOrderEmt.innerHTML += selectedTopping + " " + SandwichMaker.getVeggiesToppingPrice() + "<br>";
});

// get a reference to display element
var btn = document.getElementById("checkout");
btn.addEventListener("click", function(event){
	event.preventDefault();
  finalSandwichPrice = SandwichMaker.getTotalPrice();
	displayOrderEmt.innerHTML += "Total Price for sandwich: " + finalSandwichPrice + "<br>";
})
