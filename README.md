# Automated Greenhouse

## Introduction

## Requirements

Node v7.6.0 or higher for ES2015 and async function support.

## Installation

To make the package available in the shell as standalone command, it requires a global installation:
```bash
npm install -g express-socket-io-boilerplate
```

## Getting Started

The package installs the required folder structure along with package.json, dependencies and an empty git repository.

Command to create an express and socket.io boilerplate in the current directory: 
```bash
create-express-socket-io-boilerplate PROJECT_DIRECTORY_NAME
```

## Start the server:

To start the server, from the server directory, run:
```bash
nodemon
```

### Folder Structure
The express-socket-io-boilerplate generates the following folder structure:
```bash
└── application_directory
    ├── public
    |   ├── index.html
    |   ├── style.css
    |   └── index.js
    |
    ├── server
    |   ├── index.js
    |   ├── app.js
    |   ├── routes
    |   |   ├── REST_routes
    |   |   |   ├── index.js
    |   |   |   ├── user.routes.js
    |   |   |   └── message.routes.js
    |   |   └── SOCKET_routes
    |   |       ├── index.js
    |   |       └── eventHandlers.js
    |   ├── controllers
    |   |       ├── user.controllers.js
    |   |       └── message.controllers.js
    |   └── models
    |           ├── user.models.js
    |           └── message.models.js
    ├── package.json
    └── .git
```
