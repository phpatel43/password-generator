var specialChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '"', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var passArr =[]
var count;

document.getElementById("generate").addEventListener("click", function(){
    length()
})

function length(){
    count = prompt("How long would you like your password?")
    console.log(count)
    if (count > 128) {
        alert("Password must be less than 128 characters.")
        length()
    }
    else if (count < 8) {
        alert("Password must be more than 8 characters.")
        length()
    } else {
        Character()
    }
}



document.getElementById("text").value="test"
