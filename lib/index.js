"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const schema_validate_1 = require("@btime/schema-validate");
class QueryStringAdapter {
    constructor(defineErrorMessages) {
        this.defineErrorMessages = defineErrorMessages;
    }
    _validate(data) {
        const Schema = schema_validate_1.getSchema(this.defineErrorMessages)({
            name: 'request-options',
            method: 'query-string-adapter',
        });
        return schema_validate_1.Joi.object(Schema.result).validate(data, { abortEarly: false });
    }
    parseString(data) {
        try {
            const result = JSON.parse(data);
            const isValid = this._validate(result);
            if (isValid.error) {
                return Promise.reject(isValid.error);
            }
            return Promise.resolve(result);
        }
        catch (err) {
            return Promise.reject(err);
        }
    }
    parseObject(data) {
        const isValid = this._validate(data);
        if (isValid.error) {
            return Promise.reject(isValid.error);
        }
        return Promise.resolve(JSON.stringify(data));
    }
    parse(data) {
        if (!lodash_1.isString(data) && !lodash_1.isObject(data)) {
            return Promise.reject(new Error(`
        The data isn't a string or object
      `));
        }
        if (lodash_1.isString(data)) {
            return this.parseString(data);
        }
        if (lodash_1.isObject(data)) {
            return this.parseObject(data);
        }
    }
}
exports.default = QueryStringAdapter;
