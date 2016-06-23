module.exports = {
  for_number: function (number) {

    var primefactors =  []
    var n = number
    if (0 === n % 2) {
      primefactors.push(2)
      n /= 2
      if (0 === n % 2) {
        primefactors.push(2)
      }
    }
    else if (1 < n) {
     primefactors.push(n)
    }

    return primefactors
  }
}
