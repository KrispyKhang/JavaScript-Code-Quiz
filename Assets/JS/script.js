const startbtn = document.querySelector("#startbtn");
const quizintro = document.querySelector(".quiz-intro");
const questions = document.querySelector(".question-screen")
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
startbtn.addEventListener("click", startGame);

function startGame(){
    quizintro.classList.add("hidestuff");
    questions.classList.remove("hidestuff")

    // hide the quiz-intro
    // show the question-screen
}