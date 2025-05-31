//import the questions from the questions.js file
import {
    geographyQuestions
} from './questions.js';

// Define the question sets
const questionSets = {
    geographyQuestions: geographyQuestions,
    // add more like: historyQuestions: historyQuestions, etc.
};

let currentQuestionIndex = 0;
let currentQuestions = [];
let currentGameType = "geographyQuestions";
let correctCount = 0;
let incorrectCount = 0;

// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function () {
    
    // Add submit button event listener
    const submitButton = document.querySelector('button[type="submit"]');
    const quizForm = document.getElementById('quiz-form');
    
    // Handle form submission
    quizForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission
        
        const selected = document.querySelector(".answer-option.selected");
        if (selected) {
            // Extract the answer text (remove the letter prefix like "A. ")
            const selectedAnswer = selected.textContent.substring(3).trim();
            checkAnswer(selectedAnswer);
        } else {
            alert("Please select an option!");
        }
    });

    // Add click handlers to answer options
    const optionButtons = document.querySelectorAll(".answer-option");
    optionButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove 'selected' class from all buttons
            optionButtons.forEach(btn => {
                btn.classList.remove("selected");
                btn.classList.remove("btn-primary");
                btn.classList.add("btn-outline-secondary");
            });
            // Add 'selected' class to clicked one
            this.classList.add("selected");
            this.classList.remove("btn-outline-secondary");
            this.classList.add("btn-primary");
        });
    });

    // Add Enter key support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const selected = document.querySelector(".answer-option.selected");
            if (selected) {
                const selectedAnswer = selected.textContent.substring(3).trim();
                checkAnswer(selectedAnswer);
            }
        }
    });

    // Initialize the first game
    runGame("geographyQuestions");
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    currentGameType = gameType;
    const questionSet = questionSets[gameType];

    if (questionSet) {
        currentQuestions = getRandomQuestionsWithShuffledOptions(questionSet, 10);
        currentQuestionIndex = 0;
        correctCount = 0;
        incorrectCount = 0;
        updateScoreDisplay();
        displayQuestion(currentQuestions[currentQuestionIndex]);
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

function checkAnswer(selectedAnswer) {
    const correctAnswer = currentQuestions[currentQuestionIndex].answer;
    const isCorrect = selectedAnswer === correctAnswer;

    // Update counters
    if (isCorrect) {
        correctCount++;
    } else {
        incorrectCount++;
    }

    // Give visual feedback
    const optionButtons = document.querySelectorAll(".answer-option");
    const submitButton = document.querySelector('button[type="submit"]');

    // Disable submit button and all options after answer
    submitButton.disabled = true;
    
    optionButtons.forEach(button => {
        button.disabled = true; // Disable all options after answer
        const buttonAnswer = button.textContent.substring(3).trim();
        
        if (buttonAnswer === correctAnswer) {
            button.classList.remove("btn-outline-secondary", "btn-primary");
            button.classList.add("btn-success"); // Green for correct
            button.innerHTML = button.textContent + " ✅";
        } else if (buttonAnswer === selectedAnswer && !isCorrect) {
            button.classList.remove("btn-outline-secondary", "btn-primary");
            button.classList.add("btn-danger"); // Red for incorrect selection
            button.innerHTML = button.textContent + " ❌";
        }
    });

    // Show result message in question box
    const questionElement = document.getElementById("question-text");
    const originalQuestion = questionElement.textContent;
    
    if (isCorrect) {
        questionElement.innerHTML = `<div class="text-success"><strong>✅ Correct!</strong></div><div class="mt-2">${originalQuestion}</div>`;
    } else {
        questionElement.innerHTML = `<div class="text-danger"><strong>❌ Incorrect!</strong></div><div class="mt-2 text-muted">The correct answer was: <strong>${correctAnswer}</strong></div><div class="mt-2">${originalQuestion}</div>`;
    }

    // Update score display
    updateScoreDisplay();

    // Move to next question after delay
    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < currentQuestions.length) {
            displayQuestion(currentQuestions[currentQuestionIndex]);
        } else {
            endGame();
        }
    }, 2500); // Slightly longer delay to read feedback
}

// Display the question and options in the frontend UI
function displayQuestion(question) {
    const questionElement = document.getElementById("question-text");
    questionElement.textContent = question.question;

    const optionButtons = document.querySelectorAll(".answer-option");
    const submitButton = document.querySelector('button[type="submit"]');

    // Re-enable submit button
    submitButton.disabled = false;

    // Map options to buttons with letter prefixes
    const letters = ['A', 'B', 'C', 'D'];
    question.options.forEach((option, index) => {
        if (optionButtons[index]) {
            optionButtons[index].innerHTML = `${letters[index]}. ${option}`;
            optionButtons[index].classList.remove("selected", "btn-primary", "btn-success", "btn-danger");
            optionButtons[index].classList.add("btn-outline-secondary");
            optionButtons[index].disabled = false; // Re-enable buttons
        }
    });
}

function updateScoreDisplay() {
    document.getElementById("correct-answers").textContent = correctCount;
    document.getElementById("incorrect-answers").textContent = incorrectCount;
    document.getElementById("total-questions").textContent = correctCount + incorrectCount;
}

function endGame() {
    const questionElement = document.getElementById("question-text");
    const percentage = Math.round((correctCount / currentQuestions.length) * 100);
    
    questionElement.innerHTML = `
        <div class="text-center">
            <h4>🎉 Quiz Complete!</h4>
            <p class="mt-3">Your Score: <strong>${correctCount}/${currentQuestions.length}</strong></p>
            <p>Percentage: <strong>${percentage}%</strong></p>
            <button class="btn btn-primary mt-3" onclick="location.reload()">Play Again</button>
        </div>
    `;

    // Hide answer options and submit button
    const optionButtons = document.querySelectorAll(".answer-option");
    const submitButton = document.querySelector('button[type="submit"]');
    
    optionButtons.forEach(button => button.style.display = 'none');
    submitButton.style.display = 'none';
}