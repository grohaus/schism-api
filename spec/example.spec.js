'use strict'

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const dirtyChai = require('dirty-chai')

chai.use(chaiAsPromised)
chai.use(dirtyChai)

const expect = chai.expect

const example = require('../lib/example')

describe('Sync', function () {
  it('is true', function () {
    expect(example.sync(true)).to.be.true()
  })
})

describe('Async', function () {
  it('is true', function (done) {
    example.async(true, function (error, value) {
      if (error || value !== true) {
        error = error || new Error(`value is ${value}`)
      }

      done(error)
    })
  })
})

describe('Promise', function () {
  it('is true', function () {
    return expect(example.promise(true)).to.eventually.be.true()
  })
})
