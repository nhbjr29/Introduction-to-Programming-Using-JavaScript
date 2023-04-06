//String Methods

//search() method
let sentence = "I like apples but I like oranges too.";
let position = sentence.search("apples");
document.getElementById("search").innerHTML = `In the given string "${sentence}", the position of the word "apples" is at ${position}.`;

//indexOf() method
let indexof = sentence.indexOf("oranges");
document.getElementById("indexof").innerHTML = `In the given string "${sentence}" the position of the word "oranges" is at ${indexof}.`;

//lastIndexOf() method
let lastindexof = sentence.lastIndexOf("like");
document.getElementById("lastindexof").innerHTML = `In the given string "${sentence}" the position of the word "like" is at ${lastindexof}.`

//length method
let length = sentence.length;
document.getElementById("length").innerHTML = `The length of the string in "${sentence}" is ${length}.`

//The slice() method
let slice = sentence.slice(7, 14);
document.getElementById("slice").innerHTML = `The sliced string that lies between the positions 7 and 14 in the string "${sentence}" is  ${slice}.`;

//The substring() method
let subString = sentence.substring(7);
document.getElementById("substring").innerHTML = `The extracted sub string from the starting position 7 in the string "${sentence}" is ${subString}`;

//The substr() method
let substr = sentence.substr(7, 4);
document.getElementById("substr").innerHTML = `The extracted sub string with length 4, from the starting position 7 in the string "${sentence}" is ${substr}.`;

//The replace() method
let replace = sentence.replace("oranges", "grapes");
document.getElementById("replace").innerHTML = `The original string is "${sentence}". While the replaced string is ${replace}`;

//The concat() method
let newString = sentence.concat(" Which is your favorite fruit?");
document.getElementById("concat").innerHTML = `'The original string is "${sentence}". While the concatenated string is ${newString}`;

//The charAt() method
let charAt = sentence.charAt(5);
document.getElementById("charat").innerHTML = `The character at position 5 in the string "${sentence}" is ${charAt}.`;

//The trim() method
const sentence1 =  ` It will remove extra spaces or white space.   `
let trim = sentence1.trim();
document.getElementById("trim").innerHTML = `This will remove extra white space just like on this string "${sentence1}" it will show this instead "${trim}"`;