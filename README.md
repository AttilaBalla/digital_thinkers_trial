# Digital Thinkers Trial Assignment


## Used technologies - Backend

* Express with an OOP typescript template
* dotenv to manage .env files
* nodemon and concurrently to help development with instant rebuild on file editing

## Used technologies - Frontend

* NextJS framework with typescript
* MaterialUI component library to quickly build a minimalistic but good looking UI
* React Query to handle data fetching from the API

## Project structure and initial setup

The frontend and backend part of the project are both separated into their respective folders that act as the root directory of each codebase.

First step is to run `npm install` in both of these to obtain the used dependencies.

Both the frontend and backend use .env files to configure some basic variables. These files need to be created in each root directory with the following minial content:

* FE:`NEXT_PUBLIC_API_BASE_URL=http://localhost:5000`
* BE: `PORT=5000`

Both projects can then be started using the scripts in package.json
