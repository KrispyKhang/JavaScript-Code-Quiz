const startBtn = document.querySelector("#startbtn");
const quizIntro = document.querySelector(".quiz-intro");
const questions = document.querySelector(".question-screen");
const button1 = document.querySelector("#quiz-question1");
const button2 = document.querySelector("#quiz-question2");
const button3 = document.querySelector("#quiz-question3");
const button4 = document.querySelector("#quiz-question4");
const questionText = document.querySelector("#question-text")
let currentQuestion = 0

// f2 changes the name of the variable in all the places it's in,

// Defining quiz questions and answers
const quizData = [
    {
        question: "What does HTML stand for?",
        answers: ["Hypertext Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language", "Hypertext Markup Logic"],
        correct: 0,
    },
    {
        question: "Which CSS propert is used for changing the text color of an element?",
        answers: ["text-color", "color", "text-style", "font-color"],
        correct: 1,
    },
    {
        question: "What is Javascript primaraily used for?",
        answers: ["Styling webpages", "Creating interactive webpages", "Managing databases", "Sending emails"],
        correct: 1,
    },
]
startBtn.addEventListener("click", startGame);

function startGame() {
    quizIntro.classList.add("hidestuff");
    questions.classList.remove("hidestuff")

    changeQuestion();

    // hide the quiz-intro
    // show the question-screen
}


function changeQuestion() {
    questionText.textContent = quizData[currentQuestion].question;
    button1.textContent = quizData[currentQuestion].answers[0];
    button2.textContent = quizData[currentQuestion].answers[1];
    button3.textContent = quizData[currentQuestion].answers[2];
    button4.textContent = quizData[currentQuestion].answers[3];
}

button1.addEventListener("click", evaluateAnswer);
button2.addEventListener("click", evaluateAnswer);
button3.addEventListener("click", evaluateAnswer);
button4.addEventListener("click", evaluateAnswer);