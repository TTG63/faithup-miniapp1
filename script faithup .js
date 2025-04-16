
const questions = [
    {
        question: "Кто крестил Иисуса в реке Иордан?",
        answers: ["Апостол Петр", "Иоанн Креститель", "Моисей"],
        correct: 1
    },
    {
        question: "Сколько книг в Новом Завете?",
        answers: ["27", "39", "66"],
        correct: 0
    },
    {
        question: "Как звали жену Адама?",
        answers: ["Сара", "Ева", "Рахиль"],
        correct: 1
    },
    {
        question: "Что построил Ной по велению Бога?",
        answers: ["Вавилонскую башню", "Ковчег", "Храм Соломона"],
        correct: 1
    },
    {
        question: "Кто предал Иисуса за 30 сребреников?",
        answers: ["Иуда Искариот", "Понтий Пилат", "Ирод"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.className = "answer-btn";
        btn.textContent = answer;
        btn.onclick = () => selectAnswer(index);
        answersDiv.appendChild(btn);
    });
}

function selectAnswer(index) {
    if (index === questions[currentQuestion].correct) {
        score++;
    }
    document.getElementById("nextBtn").style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
        document.getElementById("nextBtn").style.display = "none";
    } else {
        document.getElementById("quiz").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("score").textContent = score;
    }
}

window.onload = showQuestion;
