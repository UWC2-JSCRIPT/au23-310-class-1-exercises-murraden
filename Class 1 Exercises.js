/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

const SMALL_PIZZA_DIAMETER = 13;
const LARGE_PIZZA_DIAMETER = 17;
const SMALL_PIZZA_PRICE = 16.99;
const LARGE_PIZZA_PRICE = 19.99;

const smallPizzaArea = Math.PI * ((SMALL_PIZZA_DIAMETER / 2) ** 2);
const largePizzaArea = Math.PI * ((LARGE_PIZZA_DIAMETER / 2) ** 2);

console.log('Small Pizza Area = ' + smallPizzaArea)
console.log('Large Pizza Area = ' + largePizzaArea)

// 2. What is the cost per square inch of each pizza?

const smallPizzaCostPerSquareInch = SMALL_PIZZA_PRICE / smallPizzaArea;

const largePizzaCostPerSquareInch = LARGE_PIZZA_PRICE / largePizzaArea;

console.log(`Small pizza cost per square inch is ${smallPizzaCostPerSquareInch}`)
console.log(`Large pizza cost per square inch is ${largePizzaCostPerSquareInch}`)

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

const LOWEST_CARD = 1;
const HIGHEST_CARD = 13;

const radnomCard = Math.ceil(Math.random() * HIGHEST_CARD);

console.log(`The random card value is ${radnomCard}.`)

// 4. Draw 3 cards and use Math to determine the highest
// card

const card1 = Math.ceil(Math.random() * HIGHEST_CARD);
const card2 = Math.ceil(Math.random() * HIGHEST_CARD);
const card3 = Math.ceil(Math.random() * HIGHEST_CARD);

const highestCard = Math.max(card1, card2, card3);

console.log(card1)
console.log(card2)
console.log(card3)
console.log(`The Highest Card Is: ${highestCard}`)

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

const firstName = 'Dennis';
const lastName = 'Murray';
const streetAddress = '2444 NE Conners Ave';
const city = 'Bend';
const state ='Oregon';
const zipCode = 97701;

let addressBlock = `${firstName} ${lastName} \n${streetAddress} \n${city}, ${state} ${zipCode} `;

console.log(addressBlock)

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

const givenString = `firstName lastName
streetAddress 
city, state zip`;

let splitGivenString = givenString.split(' '); 

let extractedFirstName = splitGivenString[0];

console.log(extractedFirstName)


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:

const startDate = new Date(2020, 0, 1);
const endDate = new Date(2020, 3, 1);

const middleDate = new Date((startDate.getTime() + endDate.getTime()) / 2)

console.log(startDate)
console.log(endDate)
console.log(`The exact date and time between the start and end dates is ${middleDate}`)


// side note here i am a tad confused as to why the middleDate value comes out to have a time of 11:30:00 when i would assume the middle time between any 00:00:00 and 00:00:00 would be 12:00:00
// after thinking on it for a few minutes i assume it is because the .getTime method is taking into account daylight savings time? 
// since when i console.log(startDate) i get GMT-0800 (Pacific Standard Time)
// and when i console.log(endDate) i get GMT-0700 (Pacific Daylight Time)
// which leads me to another question of is there a different code method for .getTime that takes into account states and places that do not practice daylight savings time?
// or did i just code it wrong?