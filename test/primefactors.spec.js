'use strict'

var expect = require('chai').expect


describe ('factorisation program', () => {
  describe ('when imported', () => {
    it ('should create a primefactors instance', () =>  {
      var primefactors = require('../src/primefactors')
    })
  })
  describe ('when called with a positive integer as paramater', () => {
    var primefactors = require('../src/primefactors')
    it ('should return empty array if passed 1', () => {
      var result = primefactors.for_number(1)
      expect(result).to.be.empty
    })

    it ('should return [2] if passed 2', () => {
      var result = primefactors.for_number(2)
      expect(result).to.deep.equal([2])
    })

    it ('should return [3] if passed 3', () => {
      var result = primefactors.for_number(3)
      expect(result).to.deep.equal([3])
    })

    it ('should return [2,2] if passed 4', () => {
      var result = primefactors.for_number(4)
      expect(result).to.deep.equal([2,2])
    })

    it ('should return [5] if passed 5', () => {
      var result = primefactors.for_number(5)
      expect(result).to.deep.equal([5])
    })
    it ('should return [2,3] if passed 6', () => {
      var result = primefactors.for_number(6)
      expect(result).to.deep.equal([2,3])
    })


  })

})
