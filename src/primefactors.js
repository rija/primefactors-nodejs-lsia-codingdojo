module.exports = {
  for_number: function (number) {

    var primefactors =  []
    var n = number
    if (1 < n) {


      if (0 === n % 2) {
        primefactors.push(2)
        n /= 2
        if (0 === n % 2) {
          primefactors.push(2)
        }
      }
      if (0 === n % 3) {
        primefactors.push(3)
        n /= 3
        if (0 === n % 3) {
          primefactors.push(3)
        }
      }
      if (0 === n % 5) {
        primefactors.push(5)
        n /= 5
        if (0 === n % 5) {
          primefactors.push(5)
        }
      }

    }

    return primefactors
  }
}
