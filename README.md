# `project-accelerator`

<br />
<p align="center">
  <!-- <a href="https://echobind.com">
    <img src="https://camo.githubusercontent.com/d22763c73585cf5d4cf87534659689c2a6b3f214/68747470733a2f2f7265732d332e636c6f7564696e6172792e636f6d2f6372756e6368626173652d70726f64756374696f6e2f696d6167652f75706c6f61642f635f6c7061642c685f3235362c775f3235362c665f6175746f2c715f6175746f3a65636f2f76313439393437333135312f68326b3233696f6f3479687230676a746f636d792e6a7067" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">Project Accelerator</h3>

  <p align="center">
    Our Recommended template for React Native projects.
    <br />
    <br />
    <!-- <a href="https://github.com/echobind/react-native-template/issues">Report Bug</a>
    ·
    <a href="https://github.com/echobind/react-native-template/issues">Request Feature</a> -->
  </p>
</p>
<!-- <div align="center">
  <a href="https://github.com/echobind/react-native-template/graphs/contributors/">
    <img alt="number of contributors." src="https://img.shields.io/github/contributors/echobind/react-native-template.svg" />
  </a>
  <img alt="License." src="https://img.shields.io/github/license/echobind/react-native-template">
</div> -->

<hr>

## Table of Contents

- [Quickstart](#quickstart)
- [About the Project](#about-the-project)
  - [Built With](#built-with)
  <!-- - [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Troubleshooting](#troubleshooting) -->
    <!-- - [Usage](#usage) -->
    <!-- - [CI/Deployment](#ci--deployment) -->
    <!-- - [Docs](#docs) -->
    <!-- - [Contributing](#contributing) -->
    <!-- - [Publishing New Release](#publish-new-release) -->
    <!-- - [Acknowledgements](#acknowledgements) -->
    <!-- - [License](#license) -->
    <!-- - [Contributors](#contributors) -->
- [Roadmap](#roadmap)

## Quickstart

To get started with our template, run one of the following commands:

```shell

# using npx and the github repo directly
npx react-native init MyApp --template https://github.com/MobDev-org/project-accelerator

# using yarn & the react-native cli
yarn global add react-native-cli
react-native init MyApp --template https://github.com/MobDev-org/project-accelerator
```

If you see an error after installing using the first option, pass the flag `--ignore-existing` and run:

```shell
npx --ignore-existing react-native init MyApp --template https://github.com/MobDev-org/project-accelerator
```

## About The Project

Here we value developer productivity. After having built lots of React Native projects, we decided to put together our own template to speed up development. Our template includes the following:

### 🏆 Dev Productivity:

<!-- - [Hygen](http://www.hygen.io/) templates to easily generate components, screens, and utils with tests and stories. Genereate slices for redux all with typescript added from the start -->

- Setup the app for TypeScript
  <!-- - `react-navigation` preconfigured with a common setup -->
    <!-- - Pre-configured scripts in `package.json` to start the app & deal with simulators -->
    <!-- - Setup `lint-staged` to run eslint checks on `precommit` -->
    <!-- - vscode settings for common overrides (🎨 Colors, formatOnSave and rulers width that matches prettier) -->
    <!-- - default Fastlane scripts for icon generation -->
    <!-- - global styles and colors -->

We hope it saves you as much time as it saves us! 👍

<!-- ## Key features: -->

<!-- - Pre-configured folder structure
- Navigation using [react-navigation](https://reactnavigation.org/) (v6) -->
  <!-- - State management using [redux](https://redux.js.org/) -->
  <!-- - Redux middleware [redux-saga](https://redux-saga.js.org/) -->
  <!-- - Git hooks using [husky](https://typicode.github.io/husky/#/) -->
  <!-- - Staging and Production environment configurations using [react-native-config](https://github.com/luggit/react-native-config) -->
  <!-- - Unsecured local data storage using [AsyncStorage](https://github.com/react-native-async-storage/async-storage#readme)
<!-- - Image caching using [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) -->
  <!-- - Splash screen using [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash) -->
  <!-- - API request using [axios](https://axios-http.com/) -->
  <!-- - Localization using [react-native-localization](https://github.com/stefalda/ReactNativeLocalization) -->
  <!-- - Responsive UI using flexbox and [react-native-size-matters](https://github.com/nirsky/react-native-size-matters) -->

## Roadmap

- [] Add src folder
- [] Add hygen templates for screens, components, slices
- [] Add bootsplash or splash screen config
- [] Add node setup prompts
- [] Add [react-native-keychain](https://github.com/oblador/react-native-keychain) for secured user data storage
- [] Add dark mode
- [] Add docs to explain provided common components usages
- [] Add atomic structure for components
- [] Add common styles
- [] Add website docs versioning
