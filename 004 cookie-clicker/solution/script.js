let cookiesCount = 0
const cookieCounterTextElement = document.querySelector('#cookie-counter')

document.querySelector('#cookie-button').addEventListener('click', addCookie)

function addCookie() {
  cookiesCount++
  cookieCounterTextElement.textContent = cookiesCount
}