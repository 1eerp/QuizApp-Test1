import data from "./morbeustions.json" 

let test = {
    title: "BASED TEST",
    descripton: "This test intends to test how based and morbius pilled you are",
    questions: data,
    alignmentChar: "ඞ"
}
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}
test.questions = shuffle(test.questions);

export default test;