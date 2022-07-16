import data from "./example.json" 

let test = {
    title: "Exapmle Alignment Test",
    descripton: "Alignment Test with a few questions\nNote: App UI in Development",
    testType: "alignment",
    questions: data,
    alignmentChar: ""
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