const questions = [
  {
      question: "Quelle est la capitale de la France ?",
      answers: [
          { text: "Paris", correct: true },
          { text: "Lyon", correct: false },
          { text: "Marseille", correct: false },
          { text: "Nice", correct: false }
      ]
  },
  // Ajoutez plus de questions ici
];

let currentQuestionIndex = 0;

function startGame() {
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  const questionElement = document.getElementById('question');
  questionElement.innerText = question.question;

  const buttons = document.querySelectorAll('.btn');
  question.answers.forEach((answer, index) => {
      buttons[index].innerText = answer.text;
      buttons[index].onclick = () => selectAnswer(answer);
  });
}

function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
  } else {
      // Le quiz est terminé
      console.log('Quiz terminé');
  }
}

function selectAnswer(answer) {
  console.log('Réponse sélectionnée:', answer);
  document.getElementById('nextButton').style.display = 'block';
}

startGame();