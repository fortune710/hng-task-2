# HNG Task 2 - Persons API

This API creates and manages a list of people and their tracks on the HNG Platform.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation/Setup](#installation/setup)
- [Running the API](#running-the-api)
- [Using the API](#using-the-api)
- [Database Structure](#database-structure)
- [Folder Structure/Source Code](#folder-structure/source-code)

## Getting Started

This Project makes use of Node.js & Express.js for the web server, and Firebase (Firestore) for the Database.

### Prerequisites

To be able to run this project locally, you must have Node.js version (>= 16.20.2) installed.

If you do not have Node.js installed, you can download it [here](https://nodejs.org/en/download)


### Installation/Setup

Follow the below instructions to get the project installed and setup locally on your machine.

1. Clone the repository:

```bash
git clone https://github.com/fortune710/hng-task-2.git

```

2. Install Dependencies:
In the root of the project folder on the command line, run `npm install`, to install depenencies


## Running the API
This project uses the `nodemon` package to run a local development server. To run this API locally, run

```bash
npm run dev
```

## Using the API
All endpoints of this API are served on the `/api` route. To use this API, please refer to the [documentation](https://github.com/fortune710/hng-task-2/blob/main/DOCUMENTATION.md) section


## Database Structure
The UML (ER Diagram) for the database structure of this project can be found below.



You can also have a preview [here]()


## Folder Structure/Source Code

- `Project Root`
  - `config`
    - `database.config.js`
  - `controllers`
    - `createPerson.js`
    - `deletePerson.js`
    - `getPerson.js`
    - `updatePerson.js`
  - `routes`
    - `index.js`
  - `DOCUMENTATION.md`
  - `README.md`

1. The `config` folder houses a single file, which contains the Firebase configurations.

2. The `controllers` folder houses 4 files, which each contain functions that create, read. update and delete data from the Firestore Database.

3. The `routes` folder houses a single file which contains all the endpoints on the `/api` route.

4. The `DOCUMENTATION.md` file contains the API documentations and usage for this project.

5. The `README.md` file contains important information on how to setup, run and use this project.












