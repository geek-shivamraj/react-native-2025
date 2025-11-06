## 📋 React Native NPM Commands Reference

- ### npm install react react-dom

| **Command**                               | **Description**                                              | **Category**   |
|-------------------------------------------|--------------------------------------------------------------|----------------|
| `node app.js`                             | **Runs node js backend**                                     | Run            |
| `npx npm-check-updates -u && npm install` | **Updates all the packages in package.json**                 | Maintenance    |
| `npm init`                                | **Create a new `package.json` interactively**                | Initialization |
| `npm init -y`                             | **Create a default `package.json`**                          | Initialization |
| `npm install <package>`                   | **Install a package and add to `dependencies`**              | Installation   |
| `npm install <package> --save-dev`        | **Install a package for development only**                   | Installation   |
| `npm uninstall <package>`                 | **Remove a package and update `package.json`**               | Maintenance    |
| `npm update`                              | **Update all packages to latest compatible versions**        | Maintenance    |
| `npm outdated`                            | **List outdated packages**                                   | Maintenance    |
| `npm audit`                               | **Scan for vulnerabilities**                                 | Security       |
| `npm audit fix`                           | **Automatically fix vulnerabilities**                        | Security       |
| `npm run <script>`                        | **Run a custom script from `package.json`**                  | Scripts        |
| `npm test`                                | **Run the test script**                                      | Scripts        |
| `npm ci`                                  | **Clean install from `package-lock.json` (ideal for CI/CD)** | CI/CD          |
| `npm list`                                | **Show installed packages**                                  | Inspection     |
| `npm cache clean --force`                 | **Clear the npm cache**                                      | Maintenance    |
| `npm config list`                         | **View npm configuration**                                   | Configuration  |
| `npm version <patch/minor/major>`         | **Bump version and update `package.json`**                   | Publishing     |
| `npm login`                               | **Authenticate with npm registry**                           | Publishing     |
| `npm publish`                             | **Publish your package to npm**                              | Publishing     |

## 🚀 Expo CLI & Create Expo App Commands

### Reference Documents
- Expo versions: https://docs.expo.dev/versions/latest/
- Create Expo - https://docs.expo.dev/more/create-expo/

### 🆕 Project Creation (`create-expo-app`)

| Command                            | Description                                                                                  | Template                                           |
|------------------------------------|----------------------------------------------------------------------------------------------|----------------------------------------------------|
| `npx create-expo-app`              | Creates a new Expo project with default template.                                            | `npx create-expo-app my-app`                       |
| `npx create-expo-app --template`   | Creates a project with a specific template like blank, blank-typescript, bare-minimum, tabs. | `npx create-expo-app my-app --template blank`      |
| `npx create-expo-app --example`    | Creates a project from an example repo.                                                      | `npx create-expo-app my-app --example with-router` |
| `npx create-expo-app --yes`        | Skips prompts and uses defaults.                                                             | `npx create-expo-app my-app --yes`                 |
| `npx create-expo-app --npm`        | Uses npm instead of yarn.                                                                    | `npx create-expo-app my-app --npm`                 |
| `npx create-expo-app --no-install` | Creates project without installing dependencies.                                             | `npx create-expo-app my-app --no-install`          |

### 🧪 Development & Debugging

| Command                              | Description                                              | Template                             |
|--------------------------------------|----------------------------------------------------------|--------------------------------------|
| `npx expo start`                     | Launches the development server and opens Expo DevTools. | `npx expo start`                     |
| `npx expo start --dev-client`        | Starts server for custom dev clients.                    | `npx expo start --dev-client`        |
| `npx expo-doctor`                    | Diagnoses issues in your project setup.                  | `npx expo doctor`                    |
| `npx expo config`                    | Displays resolved config for your project.               | `npx expo config --type public`      |
| `npx expo customize metro.config.js` | Creates custom Metro config.                             | `npx expo customize metro.config.js` |
| `npx expo customize babel.config.js` | Creates custom Babel config.                             | `npx expo customize babel.config.js` |

### 📲 Native Builds & Prebuild

| Command                    | Description                                     | Template                   |
|----------------------------|-------------------------------------------------|----------------------------|
| `npx expo prebuild`        | Generates native iOS/Android directories.       | `npx expo prebuild`        |
| `npx expo run:android`     | Builds and runs app on Android device/emulator. | `npx expo run:android`     |
| `npx expo run:ios`         | Builds and runs app on iOS simulator/device.    | `npx expo run:ios`         |
| `npx expo install:android` | Installs Android dependencies.                  | `npx expo install:android` |
| `npx expo install:ios`     | Installs iOS dependencies.                      | `npx expo install:ios`     |

### 📦 Package Management

| Command            | Description                       | Template                             |
|--------------------|-----------------------------------|--------------------------------------|
| `npx expo install` | Installs SDK-compatible packages. | `npx expo install react-native-maps` |
| `npx expo upgrade` | Upgrades to latest Expo SDK.      | `npx expo upgrade`                   |

### 🚀 Deployment & Publishing

| Command               | Description                        | Template                             |
|-----------------------|------------------------------------|--------------------------------------|
| `npx expo publish`    | Publishes project to Expo hosting. | `npx expo publish`                   |
| `npx expo export`     | Exports static version of app.     | `npx expo export --output-dir dist/` |
| `npx expo export:web` | Exports app as static website.     | `npx expo export:web`                |

### 👤 Account & Auth

| Command           | Description                       | Template          |
|-------------------|-----------------------------------|-------------------|
| `npx expo login`  | Logs into Expo account.           | `npx expo login`  |
| `npx expo logout` | Logs out of Expo account.         | `npx expo logout` |
| `npx expo whoami` | Shows current authenticated user. | `npx expo whoami` |

### 🆘 Help & Info

| Command                      | Description                             | Template                     |
|------------------------------|-----------------------------------------|------------------------------|
| `npx expo --help`            | Lists all available commands.           | `npx expo --help`            |
| `npx create-expo-app --help` | Lists all options for project creation. | `npx create-expo-app --help` |