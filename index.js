function validateLineup(arr) {
  let salary = arr.reduce((acc, element) => {
    return acc += element.salary
  }, 0)

  if (salary > 45000 || arr.length > 9) {
    return false
  } else {
    return true
  }
}

module.exports = validateLineup
