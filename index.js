//write your code here
//1
function shortWords (array) {
    return array.filter(word => word.length < 5);
}

//2
function noVowel (array) {
    const vowels = /[aeiou]/gi;
    return array.map(word => word.replace(vowels, "x"));
}


//3
function longToShort (array) {
    return array.sort((a, b) => b.length - a.length);
}

//4
function onlyVowelA (array) {
    const letterA = /[a]/gi;
    return array.filter(word => letterA.test(word));
}
// console.log(onlyVowelA(["hello", "dam", "fen"]));

//5
function pluralize (array) {
    return array.map(word => (word[word.length - 1] === "s") ? word : word += "s");
}

//6
function longerThanSeven (array) {
    return array.some(word => word.length > 7);
}


//7
function oddLength (array) {
    return array.filter(word => word.length % 2 === 1);
}

//8
function allFour (array) {
    return array.every(word => word.length === 4);
}

//9
function sum (array) {
    return array.reduce((a, b) => a + b);
}

//10
function longWords (array) {
    return array.filter(word => word.length > 3);
}

//11
function uppercase (array) {
    return array.map(word => word[0] + word.slice(1));
}

//12
function concatStrings (array) {
    return array.join(" ");
}

