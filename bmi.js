//"use strict";
/*******************************************************
 *     bmi.js
 *
 *     Write a small program that calculates the Body Mass Index according to parameters,
 *     given by the user. It should generate a textbased representation like the following:
 *
 *     -----------------------------------------------------
 *     Name:		         :LAST NAME:, :First name:
 *     -----------------------------------------------------
 *     Age:                  :age: Years
 *     Height:		         :size:m (i.e. 1,81m)
 *     Weight:	             :weight: kg
 *     Basal Metabolic Rate: <bmr> kcal
 *     Body Mass Index:	     <bmi>
 *     Normal Weight:        <Yes/No>
 *     Danger:		         <Yes/No>
 *     -----------------------------------------------------
 *
 *     To do so, collect data from your users. Values within :colons: are (formatted) user-inputs;
 *     values within <angle brackets> have to be calculated by your software.
 *
 *     You - 2026-03-05
 *******************************************************/

/*
 * TODO: Declare and assign all necessary constants and variables with user input.
 * Make sure, to help your users understand what they need to type in, by using clear prompt-instructions.
 */

// const LINE = "-----------------------------------------------------";
// let bmr, bmi, normal, danger;

/**
 * Formulas:
 *
 * BMR = A + B × weight [kg] + C × height [cm] − D × age [years]
 *      For women: A=655, B=10, C=2, D=6
 *      For men: A=66, B=14, C=5, D=7
 *
 * BMI = (10000 * weight [kg]) / height² [cm]
 *
 * Normal Weight = Any BMI between 18 and 25 (including 18 and 25).
 * Danger = Any BMI lower than 16 or 30+.
 **/

/*
 * TODO: To calculate the bmr; ask your users which calculation method they would prefer (male or female).
 * Be careful. Users make typos. Make sure that you have a valid answer before moving on.
 */

// TODO: To calculate the bmi, use the given formula with all the input you have collected.
// TODO: Once you have the bmi, determine whether or not the weight is normal and if the condition is dangerous.

/*
 * TODO: Create the correct output from all your data. Make sure to stick to the promised format! NO EXCEPTIONS!
 * You can use \t to add a Tab-Space. Once your program is completed, the output in the browser console should
 * look EXACTLY like the Example-Output above (with different data, of course).
 *
 *  Valid Example:
 *   -----------------------------------------------------
 *   Name:		           NEUWERSCH, Matthias
 *   -----------------------------------------------------
 *   Age:                  35 Years
 *   Height:               1,78m
 *   Weight:               77 kg
 *   Basal Metabolic Rate: 1789 kcal
 *   Body Mass Index:      24.302487059714682
 *   Normal Weight:        Yes
 *   Danger:               No
 *   -----------------------------------------------------
 */

//console.log(LINE); // Logs the dashed-line.

/*
 * TODO: Make sure to TEST YOUR SOFTWARE! Does it work, when People are smaller than 1 meter? Or taller than 2?
 * Tip: An 18-Year old Woman, sized 160cm with 60 kg should have a BMR of 1467 kcal and a BMI of 23.4375.
 */

let surname = prompt("What is your surname?");
let name = prompt("What is your name?");
console.log("-----------------------------------------------------")
console.log("Name:\t\t\t\t  " + surname.toUpperCase() + " " + name);
console.log("-----------------------------------------------------")

let age = Number(prompt("What is your age?"));
if (isNaN(age)) {
    console.log("Please enter a valid age!");
}
else {
    console.log("Age:\t\t\t\t  " + age + " Years");
}

let heightCm = Number(prompt("What is your height in cm?"));
if (isNaN(heightCm)) {
    console.log("Please enter a valid height!");
}
else {
    let heightM = heightCm / 100; // Conversion to meters
    console.log("Height:\t\t\t\t  " + heightM.toFixed(2) + " m");
}

let weight = Number(prompt("What is your weight?"));
if (isNaN(weight)) {
    console.log("Please enter a valid weight!");
}
else {
    console.log("Weight:\t\t\t\t  " + weight + " kg");
}

//calculation
let method = prompt("Please type your gender: female or male").toLowerCase();
if (method === "female") {
     A = 655;
     B = 10;
     C = 2;
     D = 6;
     BMR = (A + B * weight + C * heightCm - D * age);
     console.log("Basal Metabolic Rate: " + BMR + " kcal")

}
else if (method === "male") {
     A = 66;
     B = 14;
     C = 5;
     D = 7;
     BMR = (A + B * weight + C * heightCm - D * age);
     console.log("Basal Metabolic Rate: " + BMR + " kcal")
}

let BMI = (10000 * weight) / Math.pow(heightCm, 2);
if (isNaN(BMI)) {
    console.log("No calculation because wrong input!");
}
else {
    console.log("BMI:\t\t\t\t  " + BMI);
}

let normal = "NO";
let danger = "NO";

if (BMI >= 18.5 && BMI <= 24.9) {
    normal = "YES";
}
if (BMI < 16 || BMI > 30) {
    danger ="YES"
}

console.log("NormalWeight:\t\t  " + normal);
console.log("Danger:\t\t\t\t  " + danger);
console.log("-----------------------------------------------------")