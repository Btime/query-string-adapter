import { isEqual } from 'lodash'
import { expect } from 'chai'
import { QueryStringAdapter } from '../src'

import MockString from './mock/string'
import MockObject from './mock/object'
import { defineErrorMessages } from '@btime/error-messages'

let queryStringAdapter = null

describe('QueryStringAdapter', () => {
  before(() => {
    queryStringAdapter = new QueryStringAdapter(defineErrorMessages)
  })

  it('Expect to parse a valid query string and compare to a schema object', () => {
    const adapter = queryStringAdapter.parse(MockString)
    expect(typeof adapter).to.be.equal('object')
    expect(isEqual(adapter, MockObject)).to.be.equal(true)
  })

  it('Expect to parse a valid schema object and compare to a query string', () => {
    const adapter = queryStringAdapter.parse(MockObject)
    expect(typeof adapter).to.be.equal('string')
    expect(isEqual(adapter, MockString)).to.be.equal(true)
  })

  it('Expect to throw an error on pass a non string/object value', () => {
    expect(() => queryStringAdapter.parse(1)).to.throws(
      `The data isn't a string or object`,
    )
  })
})
