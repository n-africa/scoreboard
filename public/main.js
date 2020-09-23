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

let counter = 0

function clickCounter(event) {
  const counterClickedOn = event.target

  if (counterClickedOn.classList.contains('add') && counter < 21) {
    counter++
  }

  const score = document.querySelector('.team1 h3')
  score.innerText = `${counter}`
}

const teamOneAddButton = document.querySelector('.team1 .add')
teamOneAddButton.addEventListener('click', clickCounter)

function clickCounter1Subtract(event) {
  const counterClickedOn = event.target

  if (counterClickedOn.classList.contains('subtract') && counter > 0) {
    counter--
  }

  const score = document.querySelector('.team1 h3')
  score.innerText = `${counter}`
}

const teamOneSubtractButton = document.querySelector('.team1 .subtract')
teamOneSubtractButton.addEventListener('click', clickCounter1Subtract)

let counter2 = 0

function clickCounter2(event) {
  const counterClickedOn = event.target

  if (counterClickedOn.classList.contains('add') && counter2 < 21) {
    counter2++
  }

  const score = document.querySelector('.team2 h3')
  score.innerText = `${counter2}`
}

const teamTwoAddButton = document.querySelector('.team2 .add')
teamTwoAddButton.addEventListener('click', clickCounter2)

function clickCounter2Subtract(event) {
  const counterClickedOn = event.target

  if (counterClickedOn.classList.contains('subtract') && counter2 > 0) {
    counter2--
  }

  const score = document.querySelector('.team2 h3')
  score.innerText = `${counter2}`
}

const teamTwoSubtractButton = document.querySelector('.team2 .subtract')
teamTwoSubtractButton.addEventListener('click', clickCounter2Subtract)
// }

// document.addEventListener('DOMContentLoaded', main)
