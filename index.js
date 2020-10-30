

function gameIdcounter(arr) {
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
// console.log(gameIdcounter(lineup))


function validateLineup(arr) {
  let lineupLengthCheck = (arr.length !== 9)
  let salaryCheck = true
  let gameIdCheck = gameIdcounter(arr)
  // let teamIdCheck = true
  // let positionCheck = true

  let salary = arr.reduce((acc, element) => {
    return acc += element.salary
  }, 0)

  if (salary > 45000) {
    salaryCheck = false
  }

  return (lineupLengthCheck && salaryCheck && gameIdCheck)
}

module.exports = validateLineup
