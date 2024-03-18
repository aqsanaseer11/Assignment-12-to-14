"use strict";
// Task 12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same,
// but each message should be personalized with the person’s name?
let Names = ["Asia", "Anum", "Alia"];
for (let Name of Names) {
    console.log(`Hello ${Name} , You're invited to a fun-filled night with your favorite people.`);
}
// Task 13: Your Own Array: Think of your favorite mode of transportation,
// such as a motorcycle or a car, and make a list that stores several 
//examples. Use your list to print a series of statements about these items, 
//such as “I would like to own a Honda motorcycle.”
let transport = ["Lamborghini Aventador", "Vigo", "Honda CD70"];
transport.forEach(transport => {
    console.log(`I would like to own a ${transport}. ${"\n"}`);
});
// Task 14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
let Guests = ["Asma", "Amna", "zunehra", "Eshal", "zeemal", "Fatima"];
Guests.forEach(Guests => {
    console.log(`${"\n"} Dear ${Guests}... ${"\n"} "You're invited to a cozy dinner affair at 'Clock Tower'"`);
});
