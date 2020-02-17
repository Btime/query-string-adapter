'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemaValidate = require('@btime/schema-validate');

var BtimeSchemaValidatePackage = _interopRequireWildcard(_schemaValidate);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var validateSchema = BtimeSchemaValidatePackage.getSchema({
  name: 'request-options', method: 'query-string-adapter' });

exports.default = validateSchema.result;