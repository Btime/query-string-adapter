import Joi from 'joi'
export default {
  fields: Joi.alternatives().try(
    Joi.array()
      .min(1)
      .items(
        Joi.string(),
        Joi.number(),
        Joi.boolean()
      ),
    Joi.object()
  )
    .optional()
    .description('the fields to format that means the select clause'),

  filters: Joi.object()
    .optional()
    .min(1)
    .description(`
      the filters to format in query string that means the where clause`
    ),

  like: Joi.object()
    .optional()
    .min(1)
    .description(`
      the like filters to format in query string that means the where clause`
    ),

  paginate: Joi.object()
    .optional()
    .keys({
      page: Joi.number().integer(),
      limit: Joi.number().integer()
    })
}
