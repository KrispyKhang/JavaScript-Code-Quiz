const startBtn = document.querySelector("#startbtn");
const quizIntro = document.querySelector(".quiz-intro");
const questions = document.querySelector(".question-screen");
const question1 = document.querySelector("#quiz-question1");
const question2 = document.querySelector("#quiz-question2");
const question3 = document.querySelector("#quiz-question3");
const question4 = document.querySelector("#quiz-question4");
let currentQuestion = 0



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

function startGame(){
    quizIntro.classList.add("hidestuff");
    questions.classList.remove("hidestuff") 

    // hide the quiz-intro
    // show the question-screen
}

function changeQuestion() {
    question1.textContent = quizData[currentQuestions].answers[0];
    question2.textContent = quizData[currentQuestions].answers[1];
    question3.textContent = quizData[currentQuestions].answers[2];

}
