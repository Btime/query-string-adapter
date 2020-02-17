import * as BtimeSchemaValidatePackage from '@btime/schema-validate'

const validateSchema = BtimeSchemaValidatePackage.getSchema({
  name: 'request-options', method: 'query-string-adapter' })

export default validateSchema.result
