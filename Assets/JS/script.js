const startBtn = document.querySelector("#startbtn");
const quizIntro = document.querySelector(".quiz-intro");
const questions = document.querySelector(".question-screen");
const button1 = document.querySelector("#quiz-question1");
const button2 = document.querySelector("#quiz-question2");
const button3 = document.querySelector("#quiz-question3");
const button4 = document.querySelector("#quiz-question4");
const questionText = document.querySelector("#question-text")
let currentQuestion = 0;
const endScreen = document.querySelector(".finish-screen");
let secondsRemaining = 60;
const timeDisplay = document.querySelector("#time-display");
let timer;
const highScore = document.querySelector(".highscore-screen");
let score = 0;
const scoreDisplay = document.querySelector("#score-display");
const enterInitials = document.querySelector("#enter-initials")
const goHome = document.querySelector("#homepage")
const viewHighScoresBtn = document.querySelector('#view-highscores')

// f2 changes the name of the variable in all the places it's in,

// Defining quiz questions and answers
const quizData = [
    {
        question: "What does HTML stand for?",
        answers: ["Hypertext Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language", "Hypertext Markup Logic"],
        correct: 0,
    },
    {
        question: "Which CSS property is used for changing the text color of an element?",
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
    viewHighScoresBtn.classList.add('hidestuff');
    quizIntro.classList.add("hidestuff");
    questions.classList.remove("hidestuff")

    // start the timer
    timer = setInterval(() => {
        secondsRemaining--;
        // timer will go down and will stop at 0 and not negative numbers (Math.max)
        if (secondsRemaining <= 0) {
            endGame()
        }
        timeDisplay.textContent = Math.max(0, secondsRemaining)
    }, 1000)

    changeQuestion();

    // hide the quiz-intro
    // show the question-screen
}

// button variable will display quizData questions.
// let currentQuestion will run starting from array[0] from quizData
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


// event is the object and result of the addEventListener
function evaluateAnswer(event) {

    const answerButton = event.target
    console.log(event.target)


    // console.log(event.target.dataset.answerIndex);cu
    const chosenAnswer = answerButton.dataset.answerIndex;
    const correctAnswer = quizData[currentQuestion].correct

    const isCorrect = chosenAnswer == correctAnswer;
    console.log(isCorrect ? "correct" : "wrong");

    const buttons = [button1, button2, button3, button4]

    if (!isCorrect) {
        secondsRemaining -= 10;
        if (secondsRemaining <= 0) {
            endGame()
        }
        timeDisplay.textContent = Math.max(0, secondsRemaining)
    } else {
        score += 10;
    }

    buttons.forEach((button) => {
        // no pointer events
        button.style.pointerEvents = "none";

        if (button.dataset.answerIndex == correctAnswer) {
            button.classList.add('correct')
        } else {
            button.classList.add('incorrect')
        }
    })


    setTimeout(() => {
        console.log('hello')

        buttons.forEach((button) => {
            button.style.pointerEvents = 'auto';
            button.classList.remove('correct')
            button.classList.remove('incorrect')
        })

        currentQuestion++;

        if (currentQuestion >= quizData.length) {
            endGame()
        } else changeQuestion();

    }, 1000)



}

enterInitials.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(enterInitials);
    const scoreToSave = {
        initials: formData.get('enter-initials'),
        score
    }

    saveScore(scoreToSave);

    highscoreScreen();
})

function endGame() {
    viewHighScoresBtn.classList.remove('hidestuff');
    // hide question-screen
    questions.classList.add("hidestuff")
    // show finish-screen
    endScreen.classList.remove("hidestuff")
    scoreDisplay.textContent = score;
    clearInterval(timer)

}


function highscoreScreen() {
    // hide the endScreen
    endScreen.classList.add('hidestuff')
    highScore.classList.remove('hidestuff')
    displayScores()
    // show the highscore-screen
}

goHome.addEventListener('click', () => {
    // hide the high scores and show the start screen
    highScore.classList.add('hidestuff')
    displayScores();
    quizIntro.classList.remove('hidestuff')

    // reset game
    score = 0;
    secondsRemaining = 60;
    currentQuestion = 0;
    timeDisplay.textContent = 60;

})

function saveScore(scoreToSave) {
    const savedScores = JSON.parse(localStorage.getItem("savedScores"))
   
    if (!savedScores || savedScores.length === 0) {
        localStorage.setItem("savedScores", JSON.stringify([scoreToSave]))
    } else {
        const scoresToSave = [...savedScores, scoreToSave]
        localStorage.setItem('savedScores', JSON.stringify(scoresToSave))
    }
}

function displayScores(){
    const savedScores = JSON.parse(localStorage.getItem("savedScores"))

    document.getElementById("table-body").innerHTML = ""

    savedScores.forEach(({initials, score})=>{
        const rowElement = document.createElement('tr')
        
        rowElement.innerHTML = `<td>${initials}</td><td>${score}</td>`

        document.getElementById("table-body").append(rowElement)
    })
}

document.getElementById("clear-btn").addEventListener('click', ()=>{
    localStorage.setItem('savedScores', JSON.stringify([]))
    displayScores()
})

viewHighScoresBtn.addEventListener('click', ()=>{
    //hide quizintro
    quizIntro.classList.add('hidestuff')
    highScore.classList.remove('hidestuff')
    displayScores()
    // show high score page
})

// const scoreToSave = {
//     initials: formData.get('enter-initials'),
//     score
// }