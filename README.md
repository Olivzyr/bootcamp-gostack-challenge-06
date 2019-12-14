<p align="center">
  <img src="https://skylab.rocketseat.com.br/api/files/1564682425906.svg",>
</p>

---

<p align="center">
  <br />
  <img src="https://img.shields.io/github/issues/SkullDarth/bootcamp-gostack-challenge-06">
  <img src="https://img.shields.io/github/forks/SkullDarth/bootcamp-gostack-challenge-06">
  <img src="https://img.shields.io/badge/made%20by-SkullDarth-lightgrey">
  <img src="https://img.shields.io/github/stars/SkullDarth/bootcamp-gostack-challenge-06">
  <img src="https://img.shields.io/github/license/SkullDarth/bootcamp-gostack-challenge-06">

  <!-- Indice personalizado -->
  <p align="center">
      <a href="#about-the-challenge">About the challenge</a>
      <strong>|</strong>
      <a href="#resources-and-procedures">Resources and Procedures</a>
      <strong>|</strong>
      <a href="#running-for-first-time">Running for First Time</a>
      <strong>|</strong>
      <a href="#project-tree">Project Tree</a>
      <strong>|</strong>
      <a href="#project-in-function">Project in function</a>
      <strong>|</strong>
      <a href="#license">License</a>
      <br />
      <br />
      <p align="center"> <strong>GoStack - Challenge 6: First project with React Native</strong></p>
   </p>

</p>

  > "Success is not the result of a game, but the destiny of a journey." !

---
## **About the Challenge**
#### Create an application from scratch to list starred repository files present in github api using **Styled components** and **ReactNative**.
#### Objective: Create new application funcionalities in project present in module 6.
---
# Resources and Procedures
---
## Technologies APIs and Libraries used to create this project

- [x] FlexBox
- [x] [Tree-cli][tree-cli]
- [x] React Native
- [x] axios
- [x] prop-types
- [x] react-icons
- [x] styled-components
- [x] [WebView][webview]
- [x] eslint
- [x] prettier
- [x] editorconfig

---
## Developed Features

- [x] API git-hub connection
- [x] Loading repository list with activity indicator
- [x] Infinity Scroll in starred repository list
- [x] Pull to refresh in starred list
- [x] WebView after access any starred repository present in list
---
## Running for First Time
To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [npm][npm] + [genymotion][genymotion] + [Yarn v1.13][yarn] or higher installed on your computer and follow this [tutorial][tutorial] to prepare your enviroment.

After prepare your enviroment execute this comands from you command line:

```bash

# Install react native in global form
$ sudo npm install -g react-native-cli

# Clone this repository
$ git clone https://github.com/SkullDarth/bootcamp-gostack-challenge-06.git

# Go into the repository
$ cd bootcamp-gostack-challenge-06

# Install dependencies
$ yarn install

# Run the Project with emulator open
$ react-native run-android
$ react-native start

```
---
## Project Tree
To create a tree files in project run commands present right below in respository folder:

```bash
$ yarn add tree-cli

$ yarn tree -l 4 -o out.txt --ignore node_modules,.gitignore,.gitattributes

```

#### Result after run comand present in top:

```bash

├── LICENSE
├── README.md
├── __tests__
|  └── App-test.js
├── android
|  ├── app
|  |  ├── BUCK
|  |  ├── build
|  |  |  ├── generated
|  |  |  ├── intermediates
|  |  |  ├── outputs
|  |  |  └── tmp
|  |  ├── build.gradle
|  |  ├── build_defs.bzl
|  |  ├── debug.keystore
|  |  ├── proguard-rules.pro
|  |  └── src
|  |     ├── debug
|  |     └── main
|  ├── build
|  |  └── kotlin
|  |     └── sessions
|  ├── build.gradle
|  ├── gradle
|  |  └── wrapper
|  |     ├── gradle-wrapper.jar
|  |     └── gradle-wrapper.properties
|  ├── gradle.properties
|  ├── gradlew
|  ├── gradlew.bat
|  └── settings.gradle
├── app.json
├── babel.config.js
├── index.js
├── ios
|  ├── Podfile
|  ├── modulo06
|  |  ├── AppDelegate.h
|  |  ├── AppDelegate.m
|  |  ├── Base.lproj
|  |  |  └── LaunchScreen.xib
|  |  ├── Images.xcassets
|  |  |  ├── AppIcon.appiconset
|  |  |  └── Contents.json
|  |  ├── Info.plist
|  |  └── main.m
|  ├── modulo06-tvOS
|  |  └── Info.plist
|  ├── modulo06-tvOSTests
|  |  └── Info.plist
|  ├── modulo06.xcodeproj
|  |  ├── project.pbxproj
|  |  └── xcshareddata
|  |     └── xcschemes
|  └── modulo06Tests
|     ├── Info.plist
|     └── modulo06Tests.m
├── metro.config.js
├── package.json
├── src
|  ├── config
|  |  └── ReactotronConfig.js
|  ├── index.js
|  ├── pages
|  |  ├── Main
|  |  |  ├── index.js
|  |  |  └── styles.js
|  |  ├── Repo
|  |  |  └── index.js
|  |  └── User
|  |     ├── index.js
|  |     └── styles.js
|  ├── routes.js
|  └── services
|     └── api.js
└── yarn.lock

directory: 2210 file: 10210

ignored: directory (147)

```
---
## Project in function

### **Initialize project**

![Initialize Project][initialized-project]


### **Aplication in use**

![project-in-function][project-in-function]

![project-in-function-02][project-in-function-02]
---
## License
This project is under the MIT license. See the [LICENSE](./LICENSE) for more information.

---

#### Made by Yan Oliveira [Get in touch!](https://www.linkedin.com/in/yan-brito/)

<!-- Hiperlinks structure to base -->
<!-- Just refer the link using this sintax: "[challenger 02][challenge02]" -->
[challenge02]: https://github.com/SkullDarth/bootcamp-gostack-challenge-02

[homePage]: #
[tree-cli]:https://github.com/MrRaindrop/tree-cli
[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[npm]: #

[Challenge-06]:#
[webview]: https://github.com/react-native-community/react-native-webview/blob/master/docs/Getting-Started.md
[tutorial]: https://docs.rocketseat.dev/ambiente-react-native/introducao
[genymotion]: https://www.genymotion.com/fun-zone/
[initialized-project]: https://user-images.githubusercontent.com/16024701/70842368-872e9900-1e01-11ea-820b-d03a89d57a9e.gif
[project-in-function]: https://user-images.githubusercontent.com/16024701/70842406-150a8400-1e02-11ea-84fb-407c707519ed.gif
[project-in-function-02]: https://user-images.githubusercontent.com/16024701/70842528-a1697680-1e03-11ea-9634-ff58fdff62ca.gif

