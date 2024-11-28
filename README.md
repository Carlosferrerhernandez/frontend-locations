# Frontend Locations

This project is a frontend application developed in **React** with **TypeScript** and **Material-UI**. Its purpose is to display a list of locations with search and filtering functionality.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Setting Environment Variables](#setting-environment-variables)
- [Running](#running)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Notes](#notes)
- [Contributions](#contributions)

---

## Prerequisites

Before you begin, make sure you have installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## Installation

1. **Clone the repository**:
```bash
git clone https://github.com/Carlosferrerhernandez/frontend-locations.git
cd frontend-locations
```

2. **Install the dependencies**:
Using npm:
```bash
npm install
```
Using yarn:
```bash
yarn install
```

---

## Setting Environment Variables

This project uses a `.env` file to set the environment variables needed to connect to the API.

1. Create a `.env` file in the root of the project if it doesn't exist.
2. Add the following variables to your `.env` file:
```env
REACT_APP_API_URL=http://locations-api.test/api
REACT_APP_API_KEY=supersecretkey
```
- **REACT_APP_API_URL**: API base URL.
- **REACT_APP_API_KEY**: API key needed to authenticate requests.

3. If you need to customize these variables, make sure they are consistent with the environment where your application will run.

---

## Running

To start your application in development mode:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your application running.

---

## Testing

This project uses **Jest** and **React Testing Library** for unit and integration testing.

### Run All Tests

```bash
npm test
```

### Run Tests with `watchAll`

To listen for changes and run tests automatically:
```bash
npm test -- --watchAll
```

### Generate Coverage Report

```bash
npm test -- --coverage
```

The report will be available in the `coverage/` folder.

### Test Results

Test results are also saved in a file called `test-results.txt` located in the root of the project.

---

## Project Structure

```plaintext
frontend-locations/
├── build/ # Files generated after compilation
├── public/ # Static files
├── src/ # Main source code
│ ├── components/ # React components
│ │ ├── LocationList.tsx # Component that handles locations
│ │ ├── LocationList.test.tsx # Tests for LocationList
│ ├── api.ts # Configuration for API calls
│ ├── App.tsx # Root component
│ ├── App.test.tsx # Tests for the component App
│ ├── setupTests.ts # Initial setup for Jest and RTL
│ ├── index.tsx # Application entry point
├── .env # Environment variables
├── README.md # Project documentation
├── jest.config.js # Jest configuration
├── package.json # Dependencies and scripts
└── tsconfig.json # TypeScript configuration
```

---

## Notes

1. **`LocationList` component**:
- Displays a list of locations with search and filter support.
- Uses Material-UI for styling and components.
- Makes API requests to get location data.

2. **Tests**:
- All tests are located in `*.test.tsx` files.
- Coverage includes tests for components such as `LocationList` and `App`.

3. **Available Scripts**:
- `npm start`: Starts the application in development mode.
- `npm test`: Runs the tests.
- `npm run build`: Builds the project for production.

---

## Contributions

Thank you for your interest in contributing! Follow these steps:

1. Fork the repository.
2. Create a branch for your feature:
```bash
git checkout -b feature/new-feature
```
3. Make changes and add appropriate tests.
4. Make sure all tests pass:
```bash
npm test
```
5. Submit a pull request with your changes.

---

## Contact

If you encounter any problems or have questions, please open an [issue](carlosferrerhernandez10@gmail.com).
