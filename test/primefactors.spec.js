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

  })

})
