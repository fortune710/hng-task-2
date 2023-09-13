# HNG Task 2 - Persons API Documentation


## All Endpoints

### Create a new person
1. `/api`
Method: `POST`

#### Sample Request Body
```json
{
    "name": "Fortune",
    "track": "Backend"
}
```
NB: The `name` property is mandatory and `track` is optional. Absence of the name property will result in `400` status

#### Sample Response
```json
{
  "newPerson": {
    "id": 2,
    "name": "Fortune",
    "track": "Backend"
  }
}
```

2. `/api/:name`
Method: `POST`
Example Endpoint: `/api/fortunethedev`

#### Sample Response
```json
{
  "newPerson": {
    "id": 3,
    "name": "fortunethedev"
  }
}
```


### Get a Person
1. `/api/:user_id`
Description: Gets a particular person using their ID
Method: `GET`
Example Endpoint: `/api/2`

### Sample Response
```json
{
  "person": {
    "id": "2",
    "track": "Backend",
    "name": "Fortune"
  },
  "message": "Person found"
}
```


### Update a Person
1. `/api/:user_id`
Description: Updates a particular person using their ID
Method: `GET`
Example Endpoint: `/api/2`

#### Sample Request Body
```json
{
  "name": "Fortune Alebiosu"
}
```

You can also add the optional `track` property to the request body.
```json
{
  "name": "Fortune Alebiosu",
  "track": "Backend"
}
```

#### Sample Response
```json
{
  "message": "Person with ID 3 has been updated",
  "person": {
    "name": "Fortune Alebiosu"
  }
}
```

After adding the optional `track` property
```json
{
  "message": "Person with ID 3 has been updated",
  "person": {
    "track": "Backend",
    "name": "Fortune Alebiosu"
  }
}
```



### Delete a Person
1. `/api/:user_id`
Description: Deletes a particular person using their ID
Method: `DELETE`
Example Endpoint: `/api/3`

#### Sample Response
```json
{
  "message": "Person with ID 3 has been deleted"
}
```