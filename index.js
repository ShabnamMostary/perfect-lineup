function teamIdCounter(arr) {
  let teamIdArr = arr.map((element) => {
    return element.teamId
  })

  return Math.max(...(Object.values(frequencyCounter(teamIdArr)))) <= 2
}

function frequencyCounter(arr) {
  let count = (arr).reduce((acc, element) => {
    if (element in acc) {
      acc[element]++
    } else {
      acc[element] = 1
    }

    return acc
  }, {})

  return count
}

function gameIdCounter(arr) {
  let gameIdArr = arr.map((player) => {
    return player.gameId
  })

  return Math.max(...(Object.values(frequencyCounter(gameIdArr)))) <= 3
}
function positionChecker(arr) {
  let positionArr = arr.map((element) => {
    return element.position
  })

  let positionCounter = frequencyCounter(positionArr)

  if (positionCounter.P === 1 && positionCounter.C === 1 && positionCounter['1B'] === 1 &&
    positionCounter['2B'] === 1 && positionCounter['3B'] === 1 && positionCounter.SS === 1) {
    return true
  } else {
    return false
  }
}

function validateLineup(arr) {
  let lineupLengthCheck = (arr.length === 9)
  let salaryCheck = true
  let gameIdCheck = gameIdCounter(arr)
  let teamIdCheck = teamIdCounter(arr)
  let positionCheck = positionChecker(arr)
  let salary = arr.reduce((acc, element) => {
    return acc += element.salary
  }, 0)

  if (salary > 45000) {
    salaryCheck = false
  }

  return (lineupLengthCheck && salaryCheck && gameIdCheck && teamIdCheck && positionCheck)
}

module.exports = validateLineup


