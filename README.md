# Match Up - Join your local sports community!

This project was created for the final assignment at the [WBS CODING SCHOOL](https://www.wbscodingschool.com/) for the Web & App Development Bootcamp.

## Table of Contents

- [Description](#description)
- [Organisation](#organisation)
- [UI](#ui)
- [Back-End](#back-end)
- [API-Endpoints](#api-endpoints)
<!-- - [Live](#live) -->
- [Programming](#programming)

## Description

This repository contains the front-end part of a Pokemon Fight application, created for a WBS Coding School assignment.

## Organisation

Trello Boards:
[Global Backlog](https://trello.com/b/5b3O3foA/matchup-global-backlog)
[Sprint 1](https://trello.com/b/iLHIkaPB/matchup-sprint-1)
[Sprint 2](https://trello.com/b/mPKFPYuN/matchup-sprint-2)
[Sprint 3](https://trello.com/b/XLXSaDP9/matchup-sprint-3)

## UI

## Back-End

The back-end part of this project has got its own [GitHub reposetory](https://github.com/HermannMarx/MatchUp_BE). It retrieves its data from a [MongoDB](https://www.mongodb.com/) database by using [mongoose.js](https://mongoosejs.com). The back-end app is deployed on [Heroku](https://matchup-be.herokuapp.com/).

## API-Endpoints

The app uses [Axios](https://www.npmjs.com/package/axios) requests to fetch data from the back-end part. Its endpoints and specificly fetched data are:

| HTTP Method | Endpoint        | Description                                                                                                |
| ----------- | --------------- | ---------------------------------------------------------------------------------------------------------- |
| GET         | /users/:id      | Retrieves a specific user by the user's id.                                                                |
| GET         | /users/logout   | Triggers the logout function in the backend and destroys the session of the user.                          |
| POST        | /users          | Creates a new user in the database.                                                                        |
| POST        | /users/filter   | Retrieves all users filtered by an sport interest and a radius of 11 km of the user who does this request. |
| POST        | /users/login    | Logs the user into her/his account and creates an session based access to it.                              |
| PUT         | /users          | Updates the users data.                                                                                    |
| PUT         | /users/rmsport  | Removes an sport interest of an specific user (Update).                                                    |
| PUT         | /users/addsport | Adds an sport interest of an specific user (Update)                                                        |

| GET | /events/:id | Retrieves all events that belongs to a specific user by the user's id. |
| GET | /events/:id/getinvites | Retrieves all invitations that belongs to a specific user by the user's id. |
| POST | /events | Creates a new event in the data base |
| POST | /events/:id/accept | Inserts in the data of an single event that a user will attend the event. |
| POST | /events/:id/cancel | Inserts in the data of an single event that a user will not attend the event. |
| POST | /events/invite | Inserts a user as a possible attendant to a single event. |
| PUT | /events/feedback | Inserts that the feedback who is a winner of an event has already been given. |

| GET | /leagues/:id | Retrieves all leagues that a user belongs to by the user's id. |
| POST |/leagues/insertuser | Inserts an array of users to a specific league. |
| PUT | /leagues/attend | Increases the number of times a user attended to an event of an specific sport league. |
| PUT | /leagues/wins | Increases the number of times a user won at events of an specific sport league.|

<!-- ## Live

The front-end application is hosted on [Netlfiy](https://poke-death-fight.netlify.app). -->

## Programming

This project has been developed using [NodeJS](https://nodejs.org/en) and [React.js](https://reactjs.org).

### Helpers

- [Leaflet.js](https://leafletjs.com/): The tool was used to implement a map into the app and retrieve geographical coordonation points, which are integrated in the data for users and events.
