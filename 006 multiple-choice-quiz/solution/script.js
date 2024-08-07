// correct answers are 0-indexed, e.g. a value of 3 represents the 4th provided option
const correctAnswerIndexes = [3, 2, 3]
const quizQuestionElements = document.querySelectorAll('.quiz-question')

for (let i = 0; i < quizQuestionElements.length; i++) {
  const quizQuestionElement = quizQuestionElements[i]
  const correctAnswerIndex = correctAnswerIndexes[i]
  setupQuizOptionButtons(quizQuestionElement, correctAnswerIndex)
}

function setupQuizOptionButtons(quizQuestionElement, correctAnswerIndex) {
  const optionButtons = quizQuestionElement
    .querySelector('.options-container')
    .children
  
  for (let i = 0; i < optionButtons.length; i++) {
    const button = optionButtons[i]
    const isCorrectAnswer = i === correctAnswerIndex

    // pick which function to call and store it in a variable
    const markQuestionAsAnswered = isCorrectAnswer ? markQuestionAsCorrectlyAnswered : markQuestionAsIncorrectlyAnswered

    // add click event listener to button
    button.addEventListener('click', () => {
      markQuestionAsAnswered(quizQuestionElement)
      highlightOptionButton(button, quizQuestionElement)
    })
  }
}

function markQuestionAsCorrectlyAnswered(quizQuestionElement) {
  quizQuestionElement.classList.remove('state-unanswered')
  quizQuestionElement.classList.remove('state-incorrect')
  quizQuestionElement.classList.add('state-correct')
  quizQuestionElement
    .querySelector('.question-status')
    .textContent = 'Correct!'
}

function markQuestionAsIncorrectlyAnswered(quizQuestionElement) {
  quizQuestionElement.classList.remove('state-unanswered')
  quizQuestionElement.classList.remove('state-correct')
  quizQuestionElement.classList.add('state-incorrect')
  quizQuestionElement
    .querySelector('.question-status')
    .textContent = 'Incorrect.'
}

function highlightOptionButton(buttonToHighlight, quizQuestionElement) {
  // Remove highlight from all buttons
  for (const button of quizQuestionElement.querySelectorAll('button')) {
    button.classList.remove('selected-option')
  }

  // Highlight selected button
  buttonToHighlight.classList.add('selected-option')
}