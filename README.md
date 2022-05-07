# My Content : Books recommandation mobile app

This repository is part of a 3-repos project :

- Main repo : [My Content : Books recommandation mobile app](https://github.com/fleuryc/OC_AI-Engineer_P9_Books-recommandation-mobile-app)
- [Azure Function](https://github.com/fleuryc/oc_p9_function "Azure Function")
- [Mobile App](https://github.com/fleuryc/oc_p9_mobile-app "Mobile App") : **this repo**

## Goals

Create a mobile app that will recommend relevant articles from globo.com to the user based on his/her interests.

## Installation

### Prerequisites

- [Yarn](https://yarnpkg.com/lang/en/docs/install "Yarn")
- [React Native](https://reactnative.dev/ "React Native")

### Dependencies

```bash
# yarn install expo-cli axios
# > or just :
yarn install
```

### Azure resources

The app will query a [Azure Function](https://azure.microsoft.com/en-us/services/functions/ "Azure Functions") that will return a list of relevant articles.

- [Quickstart: Create a function in Azure with Python using Visual Studio Code](https://docs.microsoft.com/fr-fr/azure/azure-functions/create-first-function-vs-code-python "Quickstart: Create a function in Azure with Python using Visual Studio Code")
- ...

### Environment variables

- Set environment variable values in [app.config.js](app.config.js) file (copy or rename [app.config.example.js](app.config.example.js)).

## Usage

### Run the App

```bash
yarn start
```
