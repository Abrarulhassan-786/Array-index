
//-----Two Array First and last Name-----------
var firstName = ["Abrar ", "Zain ", "Hassan ", "Shan "]
var fullName = ["Hassan", "Ali", "Qadeer", "Gul"]

var firstLast = [];
for (var i = 0; i < firstName.length; i++) {
    for (var j = 0; j < fullName.length; j++) {
        if (i == j) {
            firstLast.push(firstName[i] + fullName[j])
        }
    }
}
console.log(firstLast);

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
    for (var j = 0; j < lastNames.length; j++) {
        fullNames.push(firstNames[i] + lastNames[j]);
    }
}
console.log(fullNames)

//-----Copy text and Update-----
var text = "The New Yorker magazine doesn't allow the phrase World War II.  They say it should be the Second World War. So lets search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers."
for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {
        console.log(text.slice(0,i))
        text = text.slice(0, i) + "the Second World War " + text.slice(i + 12);
        console.log(text)
        console.log(text.slice(i+12))
    }
}

// -----Function index of-------
var text = "To be or not";
console.log(text.length)
console.log(text.lastIndexOf("be"))
console.log(text.indexOf("be"))

//------Finding ChatAt Vlaues-----
var text = "Abrar";
console.log(text.charAt("4"))
var number = Math.random()*2;

console.log(Math.ceil(number))