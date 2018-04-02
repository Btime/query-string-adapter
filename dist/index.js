'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultOptions = {
  field: 'body'
};

var QueryStringAdapter = function () {
  function QueryStringAdapter(options) {
    _classCallCheck(this, QueryStringAdapter);

    this.options = Object.assign({}, options, DefaultOptions);
  }

  _createClass(QueryStringAdapter, [{
    key: '_validate',
    value: function _validate(data) {
      return _joi2.default.validate(data, _schema2.default, { abortEarly: false });
    }
  }, {
    key: 'parseString',
    value: function parseString(data) {
      try {
        var result = JSON.parse(data);
        var isValid = this._validate(result);

        if (isValid.error) {
          return Promise.reject(isValid.error);
        }

        return Promise.resolve(result);
      } catch (err) {
        return Promise.reject(err);
      }
    }
  }, {
    key: 'parseObject',
    value: function parseObject(data) {
      var isValid = this._validate(data);
      if (isValid.error) {
        return Promise.reject(isValid.error);
      }
      return Promise.resolve(JSON.stringify(data));
    }
  }, {
    key: 'parse',
    value: function parse(data) {
      if (!(0, _lodash.isString)(data) && !(0, _lodash.isObject)(data)) {
        return Promise.reject(new Error('\n        The data isn\'t a string or object\n      '));
      }

      if ((0, _lodash.isString)(data)) {
        return this.parseString(data);
      }

      if ((0, _lodash.isObject)(data)) {
        return this.parseObject(data);
      }
    }
  }]);

  return QueryStringAdapter;
}();

exports.default = QueryStringAdapter;