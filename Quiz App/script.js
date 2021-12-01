const quizData = [
    {
        question : "Which is the most popular programming language?",
        a : "java",
        b : "python",
        c : "c++",
        d : "javascript",
        correct : 'c',
    },
    {
        question : "Which is the most used code editor?",
        a : "vs code",
        b : "pycharm",
        c : "dev c++",
        d : "atom",
        correct : 'a',
    },
    {
        question : "When was Node.Js Launched?",
        a : "2000",
        b : "1998",
        c : "2021",
        d : "2008",
        correct : 'd',
    },
    {
        question : "Node.Js IS Made of which Engine?",
        a : "Suzuki",
        b : "Chrome V8",
        c : "Honda",
        d : "Mozilla Js Engine",
        correct : 'b',
    },
    {
        question : "Where was C Invented?",
        a : "Rasode mai",
        b : "Bell Labouratory",
        c : "Area 51",
        d : "Isro",
        correct : 'b',
    }

]

const quiz = document.getElementById('quiz');
const answers = document.querySelectorAll('.answer');
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer  = undefined;
    answers.forEach((answer1)=>{
        if(answer1.checked){
            answer =  answer1.id;
        }
    })
    return answer;
}

function deselectAnswers(){
    answers.forEach((answer1)=>{
        answer1.checked = false;
    })
}

submit.addEventListener("click",() =>{
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>You Answered Correctly At ${score} / ${quizData.length} Questions</h2>
            <button onclick="location.reload()">Reload</button>`
        }
    }
});