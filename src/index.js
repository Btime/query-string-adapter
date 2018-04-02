import {
  isString,
  isObject
} from 'lodash'
import Joi from 'joi'
import Schema from './schema'

export default class QueryStringAdapter {
  _validate (data) {
    return Joi.validate(data, Schema, { abortEarly: false })
  }

  parseString (data) {
    try {
      const result = JSON.parse(data)
      const isValid = this._validate(result)

      if (isValid.error) {
        return Promise.reject(isValid.error)
      }

      return Promise.resolve(result)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  parseObject (data) {
    const isValid = this._validate(data)
    if (isValid.error) {
      return Promise.reject(isValid.error)
    }
    return Promise.resolve(JSON.stringify(data))
  }

  parse (data) {
    if (!isString(data) && !isObject(data)) {
      return Promise.reject(new Error(`
        The data isn't a string or object
      `))
    }

    if (isString(data)) {
      return this.parseString(data)
    }

    if (isObject(data)) {
      return this.parseObject(data)
    }
  }
}
