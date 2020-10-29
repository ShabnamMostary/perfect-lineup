function validateLineup(arr) {
  let salary = arr.reduce((acc, element) => {
    return acc += element.salary
  }, 0)

  if (salary <= 45000) {
    return true
  } else {
    return false
  }
}

module.exports = validateLineup
