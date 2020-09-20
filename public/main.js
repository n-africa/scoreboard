// function main() {

function handleChangeTeamOneName(event) {
  const elementThatChanged = event.target
  const inputFieldValue = elementThatChanged.value

  const teamNameElement = document.querySelector('.team1 h2')

  teamNameElement.textContent = inputFieldValue
}

const teamOneInput = document.querySelector('.team1 input')
teamOneInput.addEventListener('input', handleChangeTeamOneName)

//

function handleChangeTeamTwoName(event) {
  const elementThatChanged = event.target
  const inputFieldValue = elementThatChanged.value

  const teamNameElement = document.querySelector('.team2 h2')

  teamNameElement.textContent = inputFieldValue
}

const teamTwoInput = document.querySelector('.team2 input')
teamTwoInput.addEventListener('input', handleChangeTeamTwoName)

//

function clickCounter(event) {
  let counter = 0

  const counterClickedOn = event.target

  if (counterClickedOn.classList.contains('add fas fa-2x fa-plus-circle')) {
    counter++
  }
  if (
    counterClickedOn.classList.contains('subtract fas fa-2x fa-minus-circle')
  ) {
    counter--
  }

  const score = document.querySelector('h3')
  score.innerText = `${counter}`
}
const allScores = document.querySelectorAll('h3')

allScores.forEach(element => element.addEventListener('click', clickCounter))

// }

// document.addEventListener('DOMContentLoaded', main)
