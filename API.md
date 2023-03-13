# Endpoints

## `GET /metrics` – Get a list of Presentations

**Response**

```json
[
  {
    "id": 1234,
    "createdAt": "2023-03-13T18:16:20.017Z",
    "name": "Conversion Rate"
  },
  {
    "id": 1235,
    "createdAt": "2023-03-13T18:16:20.017Z",
    "name": "Revenue"
  }
]
```

## `POST /metric` – Create a Presentation

**Request**

```json
{
  "name": "CTR"
}
```

**Response**

Status 201 if successfully created.

```json
{
  "id": 12347,
  "name": "CTR"
}
```

Status 400 if already exists

```json
{
  "error": "Metric already exists"
}
```

## `GET /metric/:id` – Get a presentation

**Response**

```json
{
  "id": 1234,
  "name": "CTR",
  "values": [
    {
      "id": "a3bcef codb9-95a9-456b-a3d6-5508273adf32",
      "createdAt": "2023-03-13T18:16:20.017Z",
      "value": "0,72"
    },
    {
      "id": "a3bcefb9-95a9-456b-a3d6-5508273adf32",
      "createdAt": "2023-03-13T18:16:20.019Z",
      "value": "0,76"
    }
  ]
}
```
