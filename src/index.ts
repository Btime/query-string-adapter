import { isString, isObject } from 'lodash'

import { Joi, getSchema } from '@btime/schema-validate'
import { DefineErrorMessages } from '@btime/error-messages'

export class QueryStringAdapter {
  private defineErrorMessages: DefineErrorMessages

  constructor(defineErrorMessages: DefineErrorMessages) {
    this.defineErrorMessages = defineErrorMessages
  }

  _validate(data) {
    const Schema = getSchema(this.defineErrorMessages)({
      name: 'request-options',
      method: 'query-string-adapter',
    })

    return Joi.object(Schema.result).validate(data, { abortEarly: false })
  }

  parseString(data) {
    const result = JSON.parse(data)
    const isValid = this._validate(result)

    if (isValid.error) {
      throw isValid.error
    }

    return result
  }

  parseObject(data) {
    const isValid = this._validate(data)
    if (isValid.error) {
      throw isValid.error
    }
    return JSON.stringify(data)
  }

  parse(data) {
    if (!isString(data) && !isObject(data)) {
      throw new Error(`
        The data isn't a string or object
      `)
    }

    if (isString(data)) {
      return this.parseString(data)
    }

    if (isObject(data)) {
      return this.parseObject(data)
    }
  }
}
