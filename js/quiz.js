const questions = [
    {
        question: "Siapakah presiden Indonesia saat ini?",
        options: ["A. Joko Widodo", "B. Susilo Bambang Yudhoyono", "C. Megawati Soekarnoputri", "D. Abdurrahman Wahid"],
        answer: "A. Joko Widodo"
    },
    {
        question: "Apa nama planet terbesar di tata surya kita?",
        options: ["A. Mars", "B. Jupiter", "C. Bumi", "D. Venus"],
        answer: "B. Jupiter"
    },
    {
        question: "Siapakah penemu relativitas umum?",
        options: ["A. Isaac Newton", "B. Albert Einstein", "C. Stephen Hawking", "D. Galileo Galilei"],
        answer: "B. Albert Einstein"
    },
    {
        question: "Berapa jumlah provinsi di Indonesia?",
        options: ["A. 33", "B. 34", "C. 35", "D. 36"],
        answer: "B. 34"
    },
    {
        question: "Berapa jumlah warna pada pelangi?",
        options: ["A. 5", "B. 6", "C. 7", "D. 8"],
        answer: "C. 7"
    },
    {
        question: "Apa yang menyebabkan bulan memiliki fase-fase seperti bulan purnama dan bulan sabit?",
        options: ["A. Pergerakan orbit bulan", "B. Perubahan suhu bulan", "C. Interaksi gravitasi antara bulan, bumi, dan matahari", "D. Perubahan komposisi atmosfer bulan"],
        answer: "A. Pergerakan orbit bulan"
    },
    {
        question: "Apa yang menyebabkan terjadinya gempa bumi?",
        options: ["A. Pergerakan lempeng tektonik", "B. Perubahan suhu atmosfer", "C. Aktivitas vulkanik", "D. Radiasi matahari"],
        answer: "A. Pergerakan lempeng tektonik"
    },
    {
        question: "Apa yang disebut dengan istilah 'efek rumah kaca' dalam konteks perubahan iklim?",
        options: ["A. Peningkatan suhu permukaan bumi karena gas-gas tertentu menahan panas di atmosfer", "B. Perubahan warna atmosfer karena pencemaran udara", "C. Perubahan suhu permukaan bumi karena letusan gunung berapi", "D. Perubahan suhu bumi karena perubahan orbit"],
        answer: "A. Peningkatan suhu permukaan bumi karena gas-gas tertentu menahan panas di atmosfer"
    },
    {
        question: "Apa yang menyebabkan terjadinya gerhana matahari?",
        options: ["A. Bumi berada di antara matahari dan bulan", "B. Bulan berada di antara matahari dan bumi", "C. Bumi, matahari, dan bulan berada dalam satu garis lurus", "D. Pergerakan orbit bulan mengelilingi bumi"],
        answer: "C. Bumi, matahari, dan bulan berada dalam satu garis lurus"
    },
    {
        question: "Apa yang dimaksud dengan 'teori evolusi' dalam biologi?",
        options: ["A. Teori yang menjelaskan bagaimana spesies-spesies beradaptasi terhadap lingkungan mereka seiring waktu", "B. Teori yang menjelaskan pembentukan planet-planet dalam tata surya", "C. Teori yang menjelaskan bagaimana manusia berevolusi dari kera", "D. Teori yang menjelaskan bagaimana bumi terbentuk dari awan debu kosmis"],
        answer: "A. Teori yang menjelaskan bagaimana spesies-spesies beradaptasi terhadap lingkungan mereka seiring waktu"
    }
];


const startButton = document.getElementById("startButton");
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const audio = document.getElementById("audio");

let currentQuestionIndex = 0;
let userScore = 0;

quizContainer.style.display = "none";

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    startButton.style.display = "none";
    if (audio.paused) {
        audio.play();
    }
    displayQuestion();
}

function displayQuestion() {
    quizContainer.style.display = "block";
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.value = option;
        optionButton.classList.add("option");
        optionButton.addEventListener("click", () => handleAnswer(option));
        optionsElement.appendChild(optionButton);
    });
}

function endQuiz() {
    quizContainer.innerHTML = `
        <h2>Quiz Selesai</h2>
        <p>Horrey Skor Kamu: ${userScore} dari ${questions.length}</p>
    `;
    prevButton.style.display = "none";
    nextButton.style.display = "none";
}
function handleAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        userScore++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}
nextButton.addEventListener("click", displayNextQuestion);
prevButton.addEventListener("click", displayPrevQuestion);
function displayNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        prevButton.style.display = "inline-block"; 
    } else {
        endQuiz();
    }
}
function displayPrevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        if (currentQuestionIndex === 0) {
            prevButton.style.display = "none"; 
        }
    }
}