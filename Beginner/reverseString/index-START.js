/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}

console.log(reverseString('123456789'))

module.exports = reverseString