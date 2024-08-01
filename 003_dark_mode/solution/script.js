let isDarkModeActive = false
const themeToggleButton = document.querySelector('#theme-toggle-button')
themeToggleButton.addEventListener('click', toggleTheme)

function toggleTheme() {
  isDarkModeActive = !isDarkModeActive

  if (isDarkModeActive) {
    document.body.style.backgroundColor = 'var(--dark-mode-background-color)'
    document.body.style.color = 'var(--dark-mode-text-color)'
    themeToggleButton.textContent = '🌙'
  } else {
    document.body.style.backgroundColor = 'var(--light-mode-background-color)'
    document.body.style.color = 'var(--light-mode-text-color)'
    themeToggleButton.textContent = '☀️'
  }
}