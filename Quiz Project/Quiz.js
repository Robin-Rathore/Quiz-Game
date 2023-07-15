const data = [
    {
        id : 1,
        question : "Who is the author of the book \"The 5AM Club\"",
        answers : [
            {answer: "James Clear", isCorrect: false },
            {answer: "Robin Sharma", isCorrect: true },
            {answer: "Robert T Kyosaki", isCorrect: false },
            {answer: "Josh Kaufman", isCorrect: false },
        ],
    },
    {
        id : 2,
        question : "Who is the author of the book \"Atomic Habits\"",
        answers : [
            {answer: "Josh Kaufman", isCorrect: false},
            {answer: "Robin Sharma", isCorrect: false},
            {answer: "James Clear", isCorrect: true},
            {answer: "Ujwal Patni", isCorrect: false},
        ],
    },
    {
        id : 3,
        question : "Who is the author of the book \"Personal MBA\"",
        answers : [
            {answer: "James Clear", isCorrect: false},
            {answer: "Robert T Kyosaki", isCorrect: false},
            {answer: "Robin Sharma", isCorrect: false},
            {answer: "Josh Kaufman", isCorrect: true},
        ],
    },
    {
        id : 4,
        question : "Who is the author of the book \"The Physicology of Money\"",
        answers : [
            {answer: "James Clear", isCorrect: false},
            {answer: "Josh Kaufman", isCorrect: false},
            {answer: "Robert T Kyosaki", isCorrect: false},
            {answer: "Morgan Housel", isCorrect: true},
        ],
    },
    {
        id : 5,
        question : "Who is the author of the book \"Power of Subconsious Mind\"",
        answers : [
            {answer: "James Clear", isCorrect: false},
            {answer: "Robin Sharma", isCorrect: false},
            {answer: "Joseph Murphy", isCorrect: true},
            {answer: "Josh Kaufman", isCorrect: false},
        ],
    },
    {
        id : 6,
        question : "Who is the author of the book \"The Monk who Sold his Ferrari\"",
        answers : [
            {answer: "James Clear", isCorrect: false},
            {answer: "Robin Sharma", isCorrect: true},
            {answer: "Joseph Murphy", isCorrect: false},
            {answer: "Josh Kaufman", isCorrect: false},
        ],
    },
    

];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answerContainer = document.querySelector(".answers");
const submit = document.querySelector(".strip");
const play = document.querySelector(".play");
const correct = document.querySelector(".correct");
const wrong = document.querySelector(".wrong");
const score = document.querySelector(".score");



let qIndex = 0;
let correctCount =0;
let wrongCount = 0;
let total = 0;
let selectedAnser;
// let qNumber=0;
const showResult = () =>{

        gameScreen.style.display = "none";
        resultScreen.style.display = "block";
    
}
const showQuestion = (qNumber) =>{
    if(qIndex==data.length){return showResult()}
    selectedAnser = null;
question.textContent = data[qNumber].question;
    answerContainer.innerHTML = data[qNumber].answers
        .map(
             (item, index)=>
                ` <div class="answer">
                <input name="answer" type="radio" id=${index} value=${item.isCorrect} />
                <label for="1"> ${item.answer} </label>
                </div>`
        ).join("");

        selectAnswer();
};

const selectAnswer = () =>{
answerContainer.querySelectorAll("input").forEach((el) =>{
    el.addEventListener("click",(e) => {
        selectedAnser = e.target.value;
    });
});
};


const submitAnswer = () =>{
submit.addEventListener("click",() => {
    if ( selectedAnser !== null)
    {
        selectedAnser === "true" ? correctCount++ : wrongCount++;
        qIndex++;
        showQuestion(qIndex);
    } else alert("Select an answer!");
    displayResult();
});
};


const displayResult = () =>{
    total = (correctCount - wrongCount)*10;
    correct.textContent = `Correct Answer : ${correctCount}`;
    wrong.textContent = `Wrong Answer : ${wrongCount}`;
    score.textContent = `Score : ${total}`;
}

const playAgain = () =>{
    play.addEventListener("click",()=>{
        qIndex = 0;
        correctCount =0;
        wrongCount = 0;
        total = 0;
        gameScreen.style.display = "block";
        resultScreen.style.display = "none";

    })
}

showQuestion(qIndex);
submitAnswer();
playAgain();
// selectAnswer();