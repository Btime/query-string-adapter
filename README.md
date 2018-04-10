# query-string-adapter
Format schema object to a string in JSON format and viceversa

## How to install
`npm i Btime/query-string-adapter && yarn install`

## Data Input
```js
const QueryStringAdapter = require('query-string-adapter')
const data = {
  filters:
  {
    active: true,
    deleted: false,
    service_status_id: [1, 2]
  },
  fields:
  {
    service: ['name'],
    service_type_id: 'bank'
  },
  paginate:
  {
    page: 2,
    limit: 25
  }
}
const parsed = QueryStringAdapter.parse(data)
```
## Data output
- `parsed`
```json
{
    "filters":
    {
        "active": true,
        "deleted": false,
        "service_status_id": [1, 2]
    },
    "fields":
    {
        "service": ["name"],
        "service_type_id": "bank"
    },
    "paginate":
    {
        "page": 2,
        "limit": 25
    }
}
```
