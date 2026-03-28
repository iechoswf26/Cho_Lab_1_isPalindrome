function isPalindrome(input) {

    // If input is an empty string, return false.
    if (typeof input !== "string") {
        return false
    }

    if (input.trim() === "") {
        return false
    }

    // Remove regex?
    input = input.toLowerCase()

    input = input.replace(/[^a-z]/g,"")

    // Separate string into an array of individual characters.
    let originalArray = input.split("")

    // Reverse the array.
    let reversedArray = originalArray.reverse()

    // Turn reversed array back into string.
    let reversedWord = reversedArray.join('')

    // Compare word (original input with regex removed) with reversedWord.
    return input === reversedWord



}

module.exports = isPalindrome;

