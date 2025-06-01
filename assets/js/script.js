//import the questions from the questions.js file
import {
    geographyQuestions
} from './questions.js';

// Declare the global variable at the top
let questionSet = null;
let selectedQuestions = [];
let currentQuestionIndex = 0;

// Object containing available question arrays
const questionSets = {
    geography: geographyQuestions
    //history: historyQuestions,
    // add more sets as needed
};

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    // Get all button elements
    // This will select all buttons in the document
    const buttons = document.querySelectorAll('button');

    // Add event listeners to the topic buttons
    const topicButtons = document.querySelectorAll('.topic-btn');

    topicButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove 'selected' class from all buttons
            topicButtons.forEach(btn => btn.classList.remove('selected'));
            // Add 'selected' to the clicked button
            this.classList.add('selected');

            // Start the quiz for this topic
            const type = this.getAttribute('data-type');
            runGame(type);
        });
    });

    for (let button of buttons) {
        button.addEventListener("click", function () {
            const type = this.getAttribute("data-type");
            if (!type) return; // 🛡️ Skip buttons with no data-type

            if (type === "submit") {
                checkAnswer();
            } else {
                runGame(type);
            }
        });
    }

    // Setup answer button listeners separately for answer selection
    const answerButtons = document.querySelectorAll('.answer-option');
    answerButtons.forEach(button => {
        button.addEventListener('click', function () {
            answerButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    runGame("geography");
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    // Set the global questionSet based on the selected gameType
    if (questionSets[gameType]) {
        questionSet = questionSets[gameType];
        //console.log(questionSet);
        selectedQuestions = getRandomQuestionsWithShuffledOptions(questionSet, 10);
        console.log("Selected Questions:");
        console.log(selectedQuestions);
        displayQuestion(selectedQuestions[0]); // Display the first question
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

// Check the user's answer against the correct answer
function checkAnswer() {
    console.log("checkAnswer() called");
    console.log("Current index:", currentQuestionIndex);
    console.log("Selected questions:", selectedQuestions);

    //increment number of questions
    incrementQuestionNumber();

    const selected = document.querySelector('.answer-option.selected');
    if (!selected) {
        alert("Please select an answer before submitting.");
        return;
    }

    const userAnswer = selected.textContent.replace(/^[A-D]\.\s*/, "").trim();
    const correctAnswer = selectedQuestions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        console.log("User's answer:", userAnswer);
        console.log("Correct answer:", correctAnswer);
        alert("✅ Correct!");
        incrementScore();
    } else {
        alert(`❌ Incorrect! Correct answer: ${correctAnswer}`);
        incrementWrongAnswer();
    }

    // Lock current answer (disable buttons)
    document.querySelectorAll('.answer-option').forEach(btn => btn.disabled = true);
    document.querySelector('[data-type="submit"]').disabled = true;

    // Move to next question after a short delay
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            displayQuestion(selectedQuestions[currentQuestionIndex]);
            document.querySelectorAll('.answer-option').forEach(btn => {
                btn.classList.remove('selected');
                btn.disabled = false;
            });
            document.querySelector('[data-type="submit"]').disabled = false;
        } else {
            alert("🎉 Quiz complete!");
        }
    }, 1000);
}

// Dsiaplay the question and options in the frontend UI
function displayQuestion(question) {
    // Display the question and options in the UI
    const questionElement = document.getElementById("question-text");
    questionElement.textContent = question.question;

    const optionButtons = document.querySelectorAll(".answer-option");

    // Ensure there are enough buttons for all options
    question.options.forEach((option, index) => {
        if (optionButtons[index]) {
            optionButtons[index].textContent = option;
        }
    });
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("correct-answers").innerText);
    document.getElementById("correct-answers").innerText = ++oldScore;
    console.log(oldScore);
}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect-answers").innerText);
    document.getElementById("incorrect-answers").innerText = ++oldScore;
    console.log(oldScore);
}

/**
 * Gets the current tally of total questions from the DOM and increments it by 1
 */
function incrementQuestionNumber() {
    let questionNum = parseInt(document.getElementById("total-questions").innerText);
    document.getElementById("total-questions").innerText = ++questionNum;
    console.log(questionNum);
}