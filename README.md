# rock-code-challenge

Like Button for the Rock Content Code Challenge.

The API works in memory saving in the background to a json the number of likes to a specific APP client.

The Frontend has a LikeButton component that connects to the API for a specific APP client.

---

## backend

### Install

To install run the follow command inside de backend folder.

```bash
$ npm install
```

### Run

To run the API in development mode, run:

```bash
$ npm run dev
```

The server will be listening to the `5000` port, but can be easily changed on `.env` file.

### REST API

The API is running over the `/api` path on `http://localhost:5000`.

The default `APP` client is `12345`.

### Get Likes

    GET /api/like/${APP}

### Add Like

    PUT /api/like/${APP}

---

## frontend

### Install

To install run the follow command inside de frontend folder.

```bash
$ yarn
```

### Run

On the `.env` file can be changed the `APP` client and the `API URL`.

To run the frontend in development mode, run:

```bash
$ yarn start
```

The server will be listening to the `3000` port by default.

---

## Bonus Challenge

### How can you improve the feature to make it more resilient against abuse/exploitation?

Firstly I would add a middleware like `express-rate-limit` to restrict the number of requests on the API from the same IP address and host.

Secondly at the frontend I would generate a unique session (uid) that should go with the request and on the backend I would save the sessions that did like and controll them to be unique.

For a more secure implemention, I would add authentication to the platform.

### How can you improve the feature to make it scale to millions of users and perform without issues?

First of all use a centralized database, instead of the json file (just for the sake of the challenge), so that way I can replicate the number of backends needed, using a load-balancer to balance the requests.

Another option is to migrate to a serveless option like Lambda or Cloud Functions, so that way I do not need to worry about scalling.