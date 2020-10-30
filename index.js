function teamIdCounter(arr) {
  let teamIdArr = arr.map((element) => {
    return element.teamId
  })
  let teamIdCount = (teamIdArr).reduce((acc, element) => {
    if (element in acc) {
      acc[element]++
    } else {
      acc[element] = 1
    }

    return acc
  }, {})

  return Math.max(...Object.values(teamIdCount)) > 2
}

function gameIdCounter(arr) {
  let gameIdArr = arr.map((player) => {
    return player.gameId
  })
  let gameIdCount = gameIdArr.reduce((acc, element) => {
    if (element in acc) {
      acc[element]++
    } else {
      acc[element] = 1
    }

    return acc
  }, {})

  return Math.max(...Object.values(gameIdCount)) > 3
}



function validateLineup(arr) {
  let lineupLengthCheck = (arr.length !== 9)
  let salaryCheck = true
  let gameIdCheck = gameIdCounter(arr)
  let teamIdCheck = teamIdCounter(arr)
  let salary = arr.reduce((acc, element) => {
    return acc += element.salary
  }, 0)

  if (salary > 45000) {
    salaryCheck = false
  }

  return (lineupLengthCheck && salaryCheck && gameIdCheck)
}

module.exports = validateLineup
