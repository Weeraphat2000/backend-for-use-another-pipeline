# Backend App

A basic Node.js backend application with Express and unit tests.

## Setup

```bash
npm install
```

## Running the Application

```bash
npm start
```

## Running Tests

```bash
npm test
```

With coverage:

```bash
npm run test:coverage
```

## Linting

```bash
npm run lint
```

## API Endpoints

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /              | Welcome message |
| GET    | /health        | Health check    |
| GET    | /api/users     | Get all users   |
| GET    | /api/users/:id | Get user by ID  |
| POST   | /api/users     | Create new user |

## CI/CD

This project uses a **reusable workflow** from the `shared-workflows` repository for CI/CD pipeline. See `.github/workflows/ci.yml` for configuration.
# backend-for-use-another-pipeline
