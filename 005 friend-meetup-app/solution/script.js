let interestSectionElements = document.querySelectorAll('.interest-section')

for (let interestSection of interestSectionElements) {
  let rangeInput = interestSection.querySelector('input[type=range]')
  rangeInput.addEventListener('input', (event) => {
    let newInterestScore = event.target.value
    handleInterestSliderChange(newInterestScore, interestSection)
  })
}

function handleInterestSliderChange(newInterestScore, interestSectionElement) {
  let interestScoreElement = interestSectionElement.querySelector('.interest-score')
  interestScoreElement.textContent = newInterestScore

  let highlightedElements = [
    interestSectionElement.querySelector('.interest-ranking-area'),
    interestScoreElement
  ]

  for (let element of highlightedElements) {
    element.classList.remove('low-interest', 'medium-interest', 'high-interest')
  }

  let cssClass

  switch (newInterestScore) {
    case '1':
      cssClass = 'low-interest'
      break
    case '2':
    case '3':
      cssClass = 'medium-interest'
      break
    case '4':
    case '5':
      cssClass = 'high-interest'
      break
  }

  highlightedElements.forEach((element) => element.classList.add(cssClass))
}