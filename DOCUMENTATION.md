# HNG Task 2 - Persons API Documentation


## All Endpoints

### Create a new person
1. `/api`

##### Description: Creates a new person and automatically assigns an ID
##### Method: `POST`

#### Sample Request Body
```json
{
  "name": "Fortune",
  "track": "Backend"
}
```
NB: The `name` property is mandatory and `track` is optional. Absence of the name property will result in `400` status.

#### Sample Response
##### Status Code: `201 - Created`
```json
{
  "newPerson": {
    "id": 2,
    "name": "Fortune",
    "track": "Backend"
  }
}
```
##### Status Code: `404 - Bad Request`
```json
{ 
  "message": "`name` property is missing from request body" 
}
```

##### Status Code: `500 - Internal Server Error`
```json
{ 
  "error": {}, 
  "message": "Error while adding person" 
}
```

2. `/api/:name`
##### Method: `POST`
##### Example Endpoint: `/api/fortunethedev`
NB: There should not be any spaces in the name, otherwise the endpoint will not work.

#### Sample Response
##### Status Code: `201 - Created`
```json
{
  "newPerson": {
    "id": 3,
    "name": "fortunethedev"
  }
}
```

##### Status Code: `404 - Bad Request`
```json
{ 
  "message": "`name` property is missing from endpoint" 
}
```

##### Status Code: `500 - Internal Server Error`
```json
{ 
  "error": {}, 
  "message": "Error while adding person" 
}
```



### Get a Person
1. `/api/:user_id`
##### Description: Gets a particular person using their ID
##### Method: `GET`
##### Example Endpoint: `/api/2`

#### Sample Response
##### Status Code: `200 - OK`
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

##### Status Code: `404 - Not Found`
```json
{ 
  "message": "Person with ID 2 does not exist" 
}
```

##### Status Code: `500 - Internal Server Error`
```json
{ 
  "error": {}, 
  "message": "Error while finding person" 
}
```

### Get All People
1. `/api/:user_id`
##### Description: Gets all people
##### Method: `GET`
##### Example Endpoint: `/api`

#### Sample Response
##### Status Code: `200 - OK`
```json
{
  "people": [
    {
      "id": "1",
      "name": "Fortune Alebiosu",
      "track": "Backend"
    },
    {
      "id": "2",
      "track": "Backend",
      "name": "Fortune"
    }
  ],
  "message": "People found"
}
```

##### Status Code: `500 - Internal Server Error`
```json
{ 
  "error": {}, 
  "message": "Error while finding people" 
}
```





### Update a Person
1. `/api/:user_id`
##### Description: Updates a particular person using their ID
##### Method: `GET`
##### Example Endpoint: `/api/2`

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
##### Status Code: `200 - OK`
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

##### Status Code: `404 - Not Found`
```json
{ 
  "message": "Person with ID 3 does not exist" 
}
```

##### Status Code: `500 - Internal Server Error`
```json
{ 
  "error": {}, 
  "message": "Error while updating person" 
}
```




### Delete a Person
1. `/api/:user_id`
##### Description: Deletes a particular person using their ID
##### Method: `DELETE`
##### Example Endpoint: `/api/3`

#### Sample Response
##### Status Code: `200 - OK`
```json
{
  "message": "Person with ID 3 has been deleted"
}
```

##### Status Code: `404 - Not Found`
```json
{ 
  "message": "Person with ID 3 does not exist" 
}
```

##### Status Code: `500 - Internal Server Error`
```json
{ 
  "error": {}, 
  "message": "Error while updating person" 
}
```

