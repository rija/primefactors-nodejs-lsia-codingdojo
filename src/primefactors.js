module.exports = {
  for_number: function (number) {

    var primefactors =  []
    var n = number
    if (1 < n) {

      for (var i= 2 ; i <= n; i++) {
        while (0 === n % i) {
          primefactors.push(i)
          n /= i
        }
      }

    }

    return primefactors
  }
}
