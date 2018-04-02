import { script } from 'lab'
import { expect } from 'code'
import { isEqual } from 'lodash'
import QueryStringAdapter from '../index'

import MockString from './mock/string'
import MockObject from './mock/object'

const lab = exports.lab = script()
const before = lab.before
const describe = lab.describe
const it = lab.it

let queryStringAdapter = null

describe('QueryStringAdapter', () => {
  before(() => {
    queryStringAdapter = new QueryStringAdapter()
  })

  it(
    'Expect to parse a valid query string and compare to a schema object',
    () => {
      return new Promise(async (resolve, reject) => {
        const adapter = await queryStringAdapter.parse(MockString)
        expect(typeof adapter).to.be.equal('object')
        expect(isEqual(adapter, MockObject)).to.be.equal(true)
        return resolve()
      })
    })

  it(
    'Expect to parse a valid schema object and compare to a query string',
    () => {
      return new Promise(async (resolve, reject) => {
        const adapter = await queryStringAdapter.parse(MockObject)
        expect(typeof adapter).to.be.equal('string')
        expect(isEqual(adapter, MockString)).to.be.equal(true)
        return resolve()
      })
    })
})
