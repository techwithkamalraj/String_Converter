// Write a function that takes a string as input and 
// returns true if all
// characters in the string are unique, false otherwise.

function areAllCharactersUnique(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false; // Found a repeated character, return false
            }
        }
        
    }
    return true; // All characters are unique
}

console.log(areAllCharactersUnique('Kamalraj'));