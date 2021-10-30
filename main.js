
4;
// Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.
// Examples

// insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"

// insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"

// insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"

// 4-masala yechimi

// let text = "SheWalksToTheBeach";

// let str = text.split(/(?=[A-Z])/).join(" ");

// console.log(str)


// 4-masala yechimi function korinishi

// let text = "SheWalksToTheBeach";

var text = "SheWalksToTheBeach"
var newString = "";
var wasUpper = false;
for (var i = 0; i < text.length; i++)
{
    if (!wasUpper && text[i] == text.toUpperCase()[i])
    {
        newString = newString + " ";
        wasUpper = true;
    }
    else
    {
        wasUpper = false;
    }
    newString = newString + text[i];
}
console.log(newString);