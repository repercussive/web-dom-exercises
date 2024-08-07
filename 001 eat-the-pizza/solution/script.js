const eatPizzaButton = document.querySelector('#eat-pizza-button')
eatPizzaButton.addEventListener('click', eatPizza)

// ------------------

function eatPizza() {
  const pizza = document.querySelector('#pizza')
  pizza.textContent = ''
  eatPizzaButton.textContent = 'No more pizza :('
}