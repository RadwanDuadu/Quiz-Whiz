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
    const submitButton = document.getElementById('submit-btn');

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

    // add event listener for reset button
    document.getElementById('play-again-btn').addEventListener('click', () => {
        const modal = bootstrap.Modal.getInstance(document.getElementById('feedbackModal'));
        modal.hide(); // Close modal
        resetGame(); // Restart game
    });

    // Add event listeners to all buttons
    for (let button of buttons) {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // ✅ Prevent default form behavior

            const type = this.getAttribute("data-type");
            if (!type) return;

            if (type === "submit") {
                checkAnswer();
            } else if (type === "reset") {
                window.location.reload();
            } else {
                runGame(type);
            }
        });
    }


    // Blur the currently focused element when the feedback modal is closed
    const feedbackModal = document.getElementById('feedbackModal');
    feedbackModal.addEventListener('hidden.bs.modal', function () {
        // Blur the currently focused element to prevent accessibility conflict
        if (document.activeElement) {
            document.activeElement.blur();
        }
    });

    // Setup answer button listeners separately for answer selection
    const answerButtons = document.querySelectorAll('.answer-option');
    answerButtons.forEach(button => {
        button.addEventListener('click', function () {
            answerButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');

            // ✅ Enable the submit button
            submitButton.disabled = false;
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

        // Reset UI score counters
        document.getElementById("correct-answers").innerText = "0";
        document.getElementById("incorrect-answers").innerText = "0";
        document.getElementById("total-questions").innerText = "0";

        displayQuestion(selectedQuestions[0]); // Display the first question
    } else {
        showFeedbackModal(`Unknown game type: ${gameType}`, "success", "Game Type Error");
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
        showFeedbackModal("Please select an answer before submitting.", "warning", "No Answer Selected");
        return;
    }

    const userAnswer = selected.textContent.replace(/^[A-D]\.\s*/, "").trim();
    const correctAnswer = selectedQuestions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        console.log("User's answer:", userAnswer);
        console.log("Correct answer:", correctAnswer);
        showFeedbackModal("✅ Correct!", "success");
        incrementScore();
    } else {
        showFeedbackModal(`❌ Incorrect! Correct answer: ${correctAnswer}`, "danger");
        incrementWrongAnswer();
    }

    // Lock current answer (disable buttons)
    document.querySelectorAll('.answer-option').forEach(btn => btn.disabled = true);
    document.querySelector('[data-type="submit"]').disabled = true;
    const submitButton = document.getElementById('submit-btn');

    // Move to next question after a short delay
    setTimeout(() => {
        currentQuestionIndex++;
        submitButton.disabled = true;
        if (currentQuestionIndex < selectedQuestions.length) {
            displayQuestion(selectedQuestions[currentQuestionIndex]);
            document.querySelectorAll('.answer-option').forEach(btn => {
                btn.classList.remove('selected');
                btn.disabled = false;
            });
            document.querySelector('[data-type="submit"]').disabled = false;
        } else {
            showFeedbackModal("Quiz complete! Thank you for playing!", "primary", "Quiz Finished");
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

// Show a modal with feedback on the user's answer
function showFeedbackModal(message, type = "primary", title) {
    const modalElement = new bootstrap.Modal(document.getElementById('feedbackModal'));
    const modalTitle = document.getElementById('feedbackTitle');
    const modalBody = document.getElementById('feedbackBody');
    const playAgainBtn = document.getElementById('play-again-btn');
    const okBtn = document.getElementById('ok-btn');

    modalTitle.textContent = title;
    modalBody.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;

    if (title === "Quiz Finished") {
        playAgainBtn.classList.remove("d-none");
        okBtn.classList.add("d-none");
    } else {
        playAgainBtn.classList.add("d-none");
        if (okBtn.classList.contains("d-none")) {
            // If the OK button is hidden, show it
            okBtn.classList.remove("d-none");
        }
    }
    modalElement.show();
}

// Reset the current game state
// This function resets the game to its initial state
// It clears the current question index, re-selects questions, and updates the UI
function resetGame() {
    const selectedTopicBtn = document.querySelector('.topic-btn.selected');
    const currentType = selectedTopicBtn ? selectedTopicBtn.getAttribute('data-type') : "geography";

    currentQuestionIndex = 0;
    selectedQuestions = getRandomQuestionsWithShuffledOptions(questionSets[currentType], 10);
    displayQuestion(selectedQuestions[currentQuestionIndex]);

    // Re-enable all answer buttons
    const answerButtons = document.querySelectorAll('.answer-option');
    answerButtons.forEach(btn => {
        btn.classList.remove('selected');
        btn.disabled = false;
    });

    // Re-enable submit
    const submitButton = document.getElementById('submit-btn');
    submitButton.disabled = true;
}