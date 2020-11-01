/* this function takes an array of objects & array property name and returns frequeny of different
 values of that property */
function frequencyCounter(arr, property) {
  let frequencyArr = arr.map((element) => {
    return element[property]
  })

  let count = (frequencyArr).reduce((acc, element) => {
    if (element in acc) {
      acc[element]++
    } else {
      acc[element] = 1
    }

    return acc
  }, {})

  return count
}
// this function checks if the lineup have the right number of players at each position
function positionChecker(arr) {
  let positionCounter = frequencyCounter(arr, 'position')

  if (positionCounter.P === 1 && positionCounter.C === 1 && positionCounter['1B'] === 1 &&
    positionCounter['2B'] === 1 && positionCounter['3B'] === 1 && positionCounter.SS === 1) {
    return true
  } else {
    return false
  }
}

function validateLineup(arr) {
  let lineupLengthCheck = (arr.length === 9)
  // take the object returned by frequencyCounter and compute the maximum frequency
  let gameIdCheck = Math.max(...(Object.values(frequencyCounter(arr, 'gameId')))) <= 3
  let teamIdCheck = Math.max(...(Object.values(frequencyCounter(arr, 'teamId')))) <= 2
  let positionCheck = positionChecker(arr)
  let salary = arr.reduce((acc, element) => {
    return acc += element.salary
  }, 0)

  let salaryCheck = salary <= 45000

  return (lineupLengthCheck && salaryCheck && gameIdCheck && teamIdCheck && positionCheck)
}

module.exports = validateLineup


