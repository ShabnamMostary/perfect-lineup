function teamIdCounter(arr) {
  let teamIdArr = arr.map((element) => {
    return element.teamId
  })

  return maxCounter(teamIdArr) > 2
}
function maxCounter(arr) {
  let count = (arr).reduce((acc, element) => {
    if (element in acc) {
      acc[element]++
    } else {
      acc[element] = 1
    }

    return acc
  }, {})

  return Math.max(...Object.values(count))
}

function gameIdCounter(arr) {
  let gameIdArr = arr.map((player) => {
    return player.gameId
  })

  return maxCounter(gameIdArr) > 3
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

  return (lineupLengthCheck && salaryCheck && gameIdCheck && teamIdCheck)
}

module.exports = validateLineup
