# query-string-adapter
Format schema object to a string in JSON format and viceversa

## Setup

### Installing

```bash
npm i
```

### Build

```bash
npm run build
```

## Usage

### Installing

```bash
npm i Btime/query-string-adapter -S
```

## Examples

### Parsing Object into String

- **Input:**

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
  },
  ordination:
  {
    field: 'name',
    type: 'DESC'
  }
}

const parsed = QueryStringAdapter.parse(data)
```

- **Output:**

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
    },
    "ordination":
    {
        "field": "name",
        "type": "DESC"
    }
}
```

### Parsing String into Object

- **Input:**

```js
const QueryStringAdapter = require('query-string-adapter')

const data = '{"filters":{"active":true,"deleted":false,"service_status_id":[1,2]},"fields":{"service":["name"],"service_type_id":"bank"},"paginate":{"page":2,"limit":25},"ordination":{"field":"name","type":"DESC"}}'

const parsed = QueryStringAdapter.parse(data)
```

- **Output:**

```js
{
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
  },
  ordination:
  {
    field: 'name',
    type: 'DESC'
  }
}
```
