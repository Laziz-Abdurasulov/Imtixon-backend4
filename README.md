
# Nova Futur Advert-Statistics-Dyllan-hope

This is the test solution for a coding challenge presented by Nova Futur to use React, NestJS and MaterialUI to build a full-stack app.


## Tech Stack

**Client:** React, MaterialUI

**Server:** NodeJS, NestJS

**Tests:** Jest

**Storage:** Memory


## Features

- Uses NestJS for microservices
- Uses OpenApi to document controller endpoints
- Uses Jest to test services in microservices
- Uses React as it's Front-End JS framework
- Uses Memory as storage


## Run the Microservices Locally
#### Run Server
Clone the project

```bash
  git clone https://github.com/dyllanhope/Advert-Statistics-Dyllan-hope.git
```

Go to the project directory

```bash
  cd stats-backend
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```
#### Run manager service

Go to the project directory

```bash
  cd stats-manager
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```

### Open in browser
Once the server and manager service are up and running you can go to your localhost on port 3000 to view the Swagger
```
  http://localhost:3000/api
```

## Run the Client Locally
Go to the project directory

```bash
  cd stats-client
```

Install dependencies

```bash
  yarn install
```

Start the client, it will open a browser tab to the client for you.

```bash
  yarn start
```


## API References

#### Get all items
retrieves all statistics saved in memory.

```http
  GET /statistics
```
#### Get statistics via date range
Returns all statistics saved between the start and end dates.

```http
  GET /statistics/{startDate}/{endDate}
```

| Parameter  | Type      | Description                                      |
| :--------- | :-------- | :----------------------------------------------- |
| `startDate`| `string`  | **Required**. Date to start the date range with |
| `endDate`  | `string`  | **Required**. Date to end the date range with   |

#### Post statistics to save them into Memory
Saves the following data model into memory.

```http
  POST /statistics
```

| key        | Type     | Description                                 |
| :--------- | :------- | :------------------------------------------ |
| `date`     | `string` | **Required**. Date statistics are saved for |
| `views`    | `number` | Number of views an advert has recieved      |
| `clicks`   | `number` | Number of clicks this ad has recieved       |
| `cost`     | `number` | The total cost of the ad                    |

#### Clear all the statistics in memory
Clears all statistics saved in memory.

```http
  POST /statistics/clear
```



## Running Tests

#### To run tests, run the following commands:

Go to the project directory

```bash
  cd stats-manager
```
then run test
```bash
  yarn test
```


## Room for improvement
* A better, cleaner display component for the statistics.
* End-to-End testing of the Server as it is currently limited to the services.
* Event triggered loading icons, not required as the payloads are so small, however may take longer with:
    * Bigger payloads.
    * More in-depth statistics.
    * Reaching a more remote endpoint.
* Add a DB or ORM for larger scale environments.




## Contact

If you have any questions regarding my test solution please feel free to contact me via email: dyllanjhope@gmail.com


