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

## CI/CD Pipeline

This project uses a **reusable workflow** from the `shared-workflows` repository for automated testing and code quality checks.

### Available Workflows

#### 1. **CI (Reusable Workflow)** - `.github/workflows/ci.yml`

Uses the shared reusable workflow with custom configurations:

- **Inputs passed**: Node version, working directory, linting, testing, security audit
- **Features**: Automated testing, linting, security checks, code formatting validation

#### 2. **CI Local** - `.github/workflows/ci-local.yml`

Standalone workflow for local testing without external dependencies:

- **No inputs needed**: Uses hardcoded configuration
- **Features**: Basic testing, linting, coverage reports

Learn more in [shared-workflows Repository](../shared-workflows/README.md)
