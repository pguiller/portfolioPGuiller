# Getting Started with Portfolio

This boilerplate application is a template to create applications. You can find out of the box components with style easily findable in the code.

## Tools Available

### TypeScript

This application tries to respect TS configuration and typology following clean code and rules of TypeScript.

### Redux Toolkit v18

This application contains a basic authentification with Redux and the architecture to implement more reducers.
For more information about Redux, visit [Redux Documentation](https://redux.js.org/)
It also includes persist store to save state for the actual browser session. [Redux Persist Documentation](https://www.npmjs.com/package/redux-persist)

### Material UI v5

This application includes [Material UI v5](https://mui.com/components/). It is only compose with MUI component to use the new (MUI v5) [sx property](https://mui.com/system/getting-started/the-sx-prop/) to style component. It includes theme settings to customise homogeneously component.

You can find in the project some styled reusable out of the box components in the UI folder.

### Eslint v8.36

Code for this application respect eslint v8 configuration with some custom rules describe in the `eslintrc.json` file.
For more information about Eslint, visit [Eslint Rules Documentation](https://eslint.org/docs/latest/rules/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
