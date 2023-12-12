# Powerpuff Girls - TVMaze App
### Introduction
Provide a brief overview of what your project is about. Explain its purpose and main features.

### Prerequisites
Yarn, Node 16+ and IDE (preferably VS Code)

### Setup & Run the project

1. Clone the repository:
```sh 
git clone https://github.com/mdrahiem/tvmaze-agap2.git
```

2. Navigate into the project directory:
```sh
cd tvmaze-agap2
```

3. Install the dependencies:
```sh
yarn install
```

4. Run the project
```sh
yarn start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

5. Running the Tests
```sh
yarn test
```
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

6. Checking lint warnings/errors
```sh
yarn lint
```


### Project Structure

- `src/`: This directory contains all the source code for the project.
  - `App.tsx`: This is the main component of the application.
  - `components/`: This directory contains all the React components used in routes.
    - `reusable/`: This is for reusable components like card, button, link etc.
  - `services/`: This directory contains the api schema and TVMaze api implementation using RTK Query (A successor to Redux)
  - `routes/`: This directory contains the different routes of the application.
  - `utils/`: This directory contains utility functions and constants.
  - `assets/`: This directory contains images/assets used in the project.


### Tools used
1. Create-react-app with Typescript template to bootstrap the project.
2. React-router for the routing setup of the application.
3. ESLint for linting
4. Emotion for styling (css-in-js)
5. Retrieved data from TVMaze api
6. Mobile responsive with one break point
7. Hosted using AWS Amplify



### Contributing
Feel free to create a PR if you find something can be improved. TIA.
