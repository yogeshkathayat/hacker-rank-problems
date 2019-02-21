//remove duplicate words from a sentence

function removeDuplicateWords(str) {
    let newStr = '';
    str = str.split(' ')
    for (let word of str) {
        if (!newStr.includes(word)) {
            if (!newStr) newStr += word;
            else newStr += ' ' + word;
        }
    }
    return newStr;
}

//remove duplicate Characters from a string

function removeDuplicateCharacters(str) {
    let newStr = '';
    for (let ch of str) {
        if (!newStr.includes(ch)) {
            newStr += ch;
        }
    }
    return newStr;
}

console.log(removeDuplicateWords('HI THIS IS HI A STRING'));
console.log(removeDuplicateCharacters('ABCAABCCADADAA'));