const questions = [
  {
    question: "Which type of JavaScript language is ___",
    answers: [
      {
        text: "Object-Oriented",
        correct: "false",
      },
      {
        text: "Object-Based",
        correct: "true",
      },
      {
        text: "Assembly-language",
        correct: "false",
      },
      {
        text: "High-level",
        correct: "false",
      },
    ],
  },
  {
    question:
      "Which one of the following also known as Conditional Expression:",
    answers: [
      {
        text: "Alternative to if-else",
        correct: "false",
      },
      {
        text: "Switch statement",
        correct: "false",
      },
      {
        text: "If-then-else statement",
        correct: "false",
      },
      {
        text: "immediate if",
        correct: "true",
      },
    ],
  },
  {
    question: `The "function" and " var" are known as:`,
    answers: [
      {
        text: "Keywords",
        correct: "false",
      },
      {
        text: "Data types",
        correct: "false",
      },
      {
        text: "Declaration statements",
        correct: "true",
      },
      {
        text: "Prototypes",
        correct: "false",
      },
    ],
  },
  {
    question:
      "In the JavaScript, which one of the following is not considered as an error:",
    answers: [
      {
        text: "Syntax error",
        correct: "false",
      },
      {
        text: "Missing of semicolons",
        correct: "false",
      },
      {
        text: "Division by zero",
        correct: "true",
      },
      {
        text: "Missing of Bracket",
        correct: "false",
      },
    ],
  },
];

const questionElement = document.querySelector(".question");
const answerButtons = document.querySelector(".answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Your score ${score} out of ${questions.length} !`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
