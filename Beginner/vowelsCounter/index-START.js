/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


// function vowelsCounter(text) {

//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     let counter = 0

//     for(let char of text.toLowerCase()) {
//         vowels.includes(char) ? counter++ : null
//     }

//     return counter
// }

function vowelsCounter(text) {

    return text.match(/[aeiou]/ig).length

}


module.exports = vowelsCounter;
