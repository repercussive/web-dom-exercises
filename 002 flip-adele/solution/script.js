let rotateImage = false
const adeleImage = document.querySelector('#adele-image')
const flipAdeleButton = document.querySelector('#flip-adele-button')
flipAdeleButton.addEventListener('click', flipAdele)

// ------------------

function flipAdele() {
  rotateImage = !rotateImage

  if (rotateImage) {
    adeleImage.style.transform = 'rotateZ(180deg)'
  } else {
    adeleImage.style.transform = 'rotateZ(0deg)'
  }
}