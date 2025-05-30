//import the questions from the questions.js file
import {
    geographyQuestions
} from './questions.js';

// Define the question sets
const questionSets = {
    geographyQuestions: geographyQuestions,
    // add more like: historyQuestions: historyQuestions, etc.
};

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let Buttons = document.getElementsByTagName("button");

    for (let button of Buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                // checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    // document.getElementById("answer-box").addEventListener("keydown", function(event) {
    //     if (event.key === "Enter") {
    //         checkAnswer();
    //     }
    // });
    // default gameType
    runGame("geographyQuestions");

});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    const questionSet = questionSets[gameType];


    if (questionSet) {
        const selectedQuestions = getRandomQuestionsWithShuffledOptions(questionSet, 10);
        console.log("Selected Questions:");
        console.log(selectedQuestions);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw new Error(`Unknown game type: "${gameType}". Available types are: ${Object.keys(questionSets).join(", ")}`);
    }
}

// Randomly select 10 questions from the specified array
// Shuffle helper function
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function getRandomQuestionsWithShuffledOptions(questions, count) {
    const shuffledQuestions = shuffleArray([...questions]).slice(0, count);

    // Shuffle the options of each selected question
    return shuffledQuestions.map(q => ({
        ...q,
        options: shuffleArray([...q.options])
    }));
}