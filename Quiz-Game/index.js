// get all inputs
let question = document.querySelector("#question")
let option1 = document.querySelector("#option1")
let option2 = document.querySelector("#option2")
let option3 = document.querySelector("#option3")
let option4 = document.querySelector("#option4")
let radio1 = document.querySelector("#radio1")
let radio2 = document.querySelector("#radio2")
let radio3 = document.querySelector("#radio3")
let radio4 = document.querySelector("#radio4")

// get questions and shuffle
import * as api from "./api.json" with { type: "json" }
let query = api.default.sort(() => Math.random() - 0.5)

let currQuest = 0

let numAnswers = 0;
    for(let i = 0; i < query.length; i++) {
        numAnswers = numAnswers + query[i].correct.length
    }

// user info
let score = 0;

// divs for end game handling
let gameDiv = document.querySelector("#game");
let endDiv = document.querySelector("#end");
endDiv.style.display = "none";

function endGame() {
    gameDiv.style.display = "none";
    endDiv.style.display = "block";

    document.querySelector("#score").innerText = score + " / " + numAnswers;
    document.querySelector('#percent').innerText = Math.round((score / numAnswers) * 100)
}

// set question
function setUp() {
    // check if out of questions
    if(currQuest >= query.length) {
        endGame()
        return
    }

    // set question
	question.innerText = query[currQuest].question

    // set options
    let options = query[currQuest].options.sort(() => Math.random() - 0.5)

    option1.innerText = options[0]
    option2.innerText = options[1]
    option3.innerText = options[2]
    option4.innerText = options[3]

    // set radios value
    radio1.value = options[0]
    radio2.value = options[1]
    radio3.value = options[2]
    radio4.value = options[3]
}

setUp();

function checkAnswer() {
    let correctArr = query[currQuest].correct
    let radios = document.querySelectorAll("input")

    for(let i = 0; i < radios.length; i++) {
        for(let j = 0; j < correctArr.length; j++) {
            if(correctArr[j] === radios[i].value && radios[i].checked) {
                score++;
            }
        }
        radios[i].checked = false;
    }
    currQuest++;
    setUp()
}

// submit answer
document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    checkAnswer();
})

// Restart
document.querySelector('#restartBtn').addEventListener('click', (e) => {
    e.preventDefault();
    gameDiv.style.display = "block";
    endDiv.style.display = "none";
    score = 0;
    currQuest = 0;
    query = api.default.sort(() => Math.random() - 0.5)
    setUp();
})