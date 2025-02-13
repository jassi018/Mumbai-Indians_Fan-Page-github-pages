const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const resultDiv = document.getElementById("result");

let shuffledQuestions, currentQuestionIndex, score;

const questions = [
  {
    question: "Which player holds the record for the highest individual score for Mumbai Indians in the Indian Premier League (IPL)?",
    answers: [
      { text: "Rohit Sharma", correct: false },
      { text: "Kieron Pollard", correct: false },
      { text: "Sanath Jayasuriya", correct: true },
      { text: "Sachin Tendulkar", correct: false },
    ],
  },
  {
    question: "Who is the leading wicket-taker for Mumbai Indians in the history of the Indian Premier League (IPL)?",
    answers: [
      { text: "Harbhajan Singh", correct: false },
      { text: " Lasith Malinga", correct: true },
      { text: "Jasprit Bumrah", correct: false },
      { text: " Krunal Pandya", correct: false },
    ],
  },
  {
    question: "Who is the current head coach of the Mumbai Indians?",
    answers: [
      { text: "Ricky Ponting", correct: false },
      { text: "John Wright", correct: false },
      { text: "Mahela Jayawardene", correct: false },
      { text: "Mark Boucher", correct: true },
    ],
  },
  {
    question: "Which Mumbai Indians player holds the record for the most sixes hit in a single IPL season?",
    answers: [
      { text: "Kieron Pollard", correct: false },
      { text: "Sanath Jayasuriya ", correct: true },
      { text: "Rohit Sharma", correct: false },
      { text: "Surya Kumar Yadav", correct: false },
    ],
  },

  {
    question: "Mumbai Indians' highest successful run chase in IPL history came against which team?",
    answers: [
      { text: "Royal Challengers Bangalore", correct: false },
      { text: "Kings XI Punjab", correct: false },
      { text: "Chennai Super Kings", correct: true },
      { text: "Kolkata Knight Riders", correct: false },
    ],
  },


];

startQuiz();

function startQuiz() {
  score = 0;
  questionContainer.style.display = "flex";
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  nextButton.classList.remove("hide");
  restartButton.classList.add("hide");
  resultDiv.classList.add("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer, index) => {
    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group");

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.id = "answer" + index;
    radio.name = "answer";
    radio.value = index;

    const label = document.createElement("label");
    label.htmlFor = "answer" + index;
    label.innerText = answer.text;

    inputGroup.appendChild(radio);
    inputGroup.appendChild(label);
    answerButtons.appendChild(inputGroup);
  });
}

function resetState() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

nextButton.addEventListener("click", () => {
  const answerIndex = Array.from(
    answerButtons.querySelectorAll("input")
  ).findIndex((radio) => radio.checked);
  if (answerIndex !== -1) {
    if (shuffledQuestions[currentQuestionIndex].answers[answerIndex].correct) {
      score++;
    }
    currentQuestionIndex++;
    if (shuffledQuestions.length > currentQuestionIndex) {
      setNextQuestion();
    } else {
      endQuiz();
    }
  } else {
    alert("Please select an answer.");
  }
});

restartButton.addEventListener("click", startQuiz);

function endQuiz() {
  questionContainer.style.display = "none";
  nextButton.classList.add("hide");
  restartButton.classList.remove("hide");
  resultDiv.classList.remove("hide");
  resultDiv.innerText = `Your final score: ${score} / ${shuffledQuestions.length}`;
}