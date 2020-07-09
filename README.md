# Modern React

## 1. React Overview
### 1.1 Intro to React
1. **What is React?**
    - https://reactjs.org/
    - **Off. Definition** "React is a JS library for building user interfaces."
    - Popular, powerful front-end library/framework. (Most popular as of 2020)
    - Developed and sponsored by Facebook.
2. **What does React do?**
    - React makes it easy to make reusable **"view components"**
    - Components encapsulate logic and HTML into a class (also CSS sometimes)
    - Thus makes it easier to build modular apps.
3. **Separation of concerns** with React:
    - Traditional separation of concerns were technology based: HTML, CSS, JS
    - With React: Separation of concerns are made based on functinality based. Ex: 
        - Button component (HTML + CSS + JS)
        - Date Picker component (HTML + CSS + JS)
        - Modal component (HTML + CSS + JS)
        - List component
        - List item component
        - Media component

### 1.2 Is React a Framework or library?
1. **What is a FE Framework?**
    - Large JS libraries
    - Provides "blueprint" for apps
    - "Opinionated"
        - Framework tells you how you should design the app. Ex: file naming conventions, syntaxes, folder structures etc.
    - Often provide a way to reuse code
    - Often provide templating of HTML
2. Popular FE Frameworks:
    - Angular
    - Ember
    - Vue
    - React ?
3. **Angular vs React**
    - **Angular**:
        - Angular is a true ecosystem. It provides a lot of features out of the box. Ex:
            - Templating
            - CLI
            - Animations
            - Routers
            - Testing
        - Bcoz of the heavily loaded features: Angular is **heavy**.
    - **React**:
        - React on the other hand is **light weight**.
        - React provides less features out of the box.
        - We can use external tools with our application. React with external components/tools can be extremely powerful. Ex:
            - Redux
            - Router etc.
4. **React: Library or Framework?**
    - React is a library of it's own
    - Very few people use React on it's own
    - React is usually combined w/ things like React Router, Webpack etc.
    - The standard "React Ecosystem" is a framework.
    - Next.js is an actual framework built around React.

### 1.3 Introducing Components
1. **Components**:
    - Doc: https://reactjs.org/docs/components-and-props.html
    - **Off Definition**: Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
    - The building blocks of React.
    - Pieces of UI and view logic.
    - Components are classes/functions that know how to render themselves into HTML.
2. Online React editor: https://codesandbox.io/

### 1.4 Setting Up Server
1. In future, we will use create-react-app, which has built-in server. But for now, since we will build everything from scratch, we will use a server extension for vs code: **Live Server** by Ritwick Dey.
2. Once installed, 
    - Run server from editor: select the file, r click and run: open file with server. R click file ---> Stop the server
    - Run server from CLI using python: navigate to directory. `pythton3 -m http.server`

### 1.5 First React Component - using Class based component
1. Will create a class based component
2. Docs: https://reactjs.org/docs/components-and-props.html
3. Note: Traditionally, class based component were considered more powerful. But with the introduction of React hooks, things are changing and fn components are becoming more powerful.
4. **Steps to code:**
    - index.html: include React, React DOM, Babel, index.js of jsx type
        - **React**: Library: To create react components
        - **React DOM**: Library to render react components on to DOM
        - **Babel**: to convert JSX into JS code that browser can understand. JSX looks like HTML but not HTML.
        - index.js must be included with type as **"text/jsx"** for babel to understand that this js file as jsx content. If not passed, the code from index.js won't be compiled.
    - index.js: create class based component Hello to render JSX
    - index.html: create a target to render the component
    - index.js: render component using ReactDOM.render
5. Serve: index.html ---> R Clk ---> Open with Live server
    - Note: opening index.html directly on browser won't work. The file must be served to work.

### 1.6 Function vs Class components
1. Class Component:
    - The "Traditional" React component
    - Write logic in a JS class
    - Must include a render method
2. Function Component:
    - Historically used for simpler "dumb" components
    - Write logic in a JS fn
    - No render method needed, just return content
3. 01_react_intro/index.js file:
    - Modify Hello class based component to fn based component
4. **Differences?**:
    - Both can accept props and render content
    - Historically, fn components couldn't use important features like:
        - State,
        - Lifecycle methods
    - With the introduction of hooks in React 16.8.0 (February 6, 2019), we can now write full-featured function components
        - Docs: https://github.com/facebook/react/blob/master/CHANGELOG.md#1680-february-6-2019

## 2 Introducing JSX
### 2.1 Basic Rules of JSX
1. **JSX Intro**: 
    - "JS Syntax Extension" or "JS + XML"
    - Docs: https://reactjs.org/docs/introducing-jsx.html
    - Casual Defn: JSX is a tool that allows us to write HTML looking code directly in JS
    - Thus, no need to maintain separate template file and JS file (like Angular)
    - Note: It is possible to build our React app without JSX. But it will be much more difficult/complex.
2. **Using JSX**:
    - JSX isn't leegal JavaScript
    - It has to be "transpiled" to JavaScript
    - Can be transpiled with "Babel"
3. **JSX Rules**:
    - JSX is more strict than HTML. JSX elements must either:
        - Have an explicit closing tag: `<b>...</b>`
        - Be explicitly closed: `<input name="msg" />`
        - can not leave off the `/` or will get a syntax error
    - JSX must return one element only. And can not return more than one element. If there are more than one elements, all of them must be wrapped with one single element eg: a `div` or `React.Fragment`.

### 2.2 How JSX works BTS
1. Docs: JSX in Depth: https://reactjs.org/docs/jsx-in-depth.html
2. Fundamentally, JSX just provides syntactic sugar for the `React.createElement(component, props, ...children)` function.
3. Check how JSX is converted to JS with babel using online tools: 
    - https://babeljs.io/repl
    - Make sure in left panel preset: react is enabled
4. Instead of JSX we can use React.createElement to build our app. But it is more difficult and more amount of code. Check on babeljs tool to see how the code looks in React.createElement

### 2.3 Embedding JS in JSX
1. Add JS code to JSX using `{}` (interpolation)
2. Using `{}` we can:
    - run JS operations, 
    - pass props, 
    - add styles, 
    - add dynamic content etc.

### 2.4 Conditionals in JSX
1. Docs:
    - https://reactjs.org/docs/conditional-rendering.html
    - https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e/
2. Conditionally render with:
    - ternary operator check
    - boolean check
    - if check and a variable

### 2.4 Standard React App Layout
1. Conventions:
    - **App**: It's conventional for the top-level component to be named App. This renders the other sub components.
    - It's better to follow the convention, so other developers reading our code will know where to start.
    - Usually, App is the only component rendered in index.js
    - **Order of Script tags**: sub component js files should load before index.js. Ex: Hello.js should load before index.js in index.html file.
    - Have only one component per file.
2. Demo:
    - Create App component in index.js and render it on root.
    - Create Hello and NumPicker component. Load them before index.js in index.html file.
    - Render Hello and NumPicker components in index.js as subcomponents to App.

## 3. Props/properties and More
### 3.1 Intro to React Props
1. Propserties (aka. Props)
    - A useful component is a reusable one. Which means, making the component configurable or customizable.
    - Props help in customizing/configuring a react component.
2. props ex: `to="kiran dash"` traditionally mentioned in double quotes

### 3.2 Props are immutable
1. Props objects are **immutable**. 
    - All it's properties are **read only**. 
    - Props Object is **not extensible**.
    - On trying to change props in react component, it will throw error: "Cannot assign to read only property 'from' of object"
    - Similarly, we can not add new properties to props object. It will throw error: "Cannot add property age, object is not extensible"
2. To update values: we will use some other tools viz: state etc.

### 3.3 Other types of Props
1. Props can be strings ex: `to="kiran dash"`
2. For other types, embed JS expression using the curly braces `{}`:
    - `<Person name="Kiran" salary={12000} hobbies={["coding", "working out", "film making"]}>`
    - Note: Booleans by default are set to True.

### 3.4 Slot Machine Example - Props

### 3.5 Looping in JSX
1. `array.map(fn)` is commonly used to output loops in JSX.
2. Note: during looping: providing a key to loop items is must. (To create unique identification)

### 3.6 Adding Default Props with static `defaultProps` object
1. **Default Props**: Components can specify default values for missing props.
2. Create static `defaultProps` object to contain default values for all props.

### 3.7 Styling React
1. **CSS Selectors in JSX**: 
    - We have to add class selector in JSX using `className` to avoid conflict with reserved keyword `class` for react classes.
    - Similarly, we have to use `htmlFor` instead of `for`. Since `for` is reserved for `for loops` in JS.
2. **Styles**:
    - External CSS: Ex: app.css file
    - Inline CSS: We can inline CSS styles, but now style takes a JS object.
        - Note: in react js, style attributes should be camel case (`fontSize`) not kebab case (`font-size`) like normal CSS.
3. **Conditional/Dynamic Style**: 
    - Can add className to element conditionally to apply dynamic CSS

## 4. Create React App Introduction
### 4.1 Create React App tool Intro
1. What is **Create React App** tool and how to use it
2. Use **ES2015 modules** to share code across files
2. Compare **default vs non-default exports**

1. Why Create React App?
    - We can build app without create react app tool: like we did so far. Get react.js and react-dom.js from a CDN. And We can transpile JSX in the browser at runtime
    - Create-React-App is a utility script (`npx create-react-app my-app`) that: 
        - Creates a skeleton react project
        - Sets the project up so that: JS files are run through Babel automatically
        - Let's us use super-modern JS features/idioms
        - Makes testing & deployment much easier
        - Docs: https://create-react-app.dev/, https://reactjs.org/docs/create-a-new-react-app.html

### 4.2 Ways of using CRA
1. Two ways:
    - npx (new)
    - npm
2. Dependencies: nodejs LTS version: https://nodejs.org/en/
    - check node version: In terminal run: `node -v` (12.18.1)
    - check npm version: `npm -v` or `npx -v` (6.14.5)
3. With npx, we don't have to install CRA on our machine.
    - `npx create-react-app hello_world`
    - Note: to use npx, our machine must have Node >= 8.10 and npm >= 5.6.
4. With npm, we will have to install create-react-app globally on our machine and then use it.
    - `npm install -g create-react-app`: installs the CRA tool
    - `create-react-app hello_world` : use CRA tool to create react project
5. Run server:
    - `npm start`

### 4.3 Creating a new App
1. Standard way of naming: kebab case (Ex: hello-world) but can give any other name as well.
    - `npx create-react-app our-first-app`
    - or `npx create-react-app hello_world`
2. Folder structure (hello_world):
    - node_modules: contains all packages
    - public: contains publicly available code. (Will edit rarely)
        - viz: index.html file: the starting point of our app. Main HTML page of the site. The file that loads when our app is launched
            - div with id `root`: where our react app will load
        - favicon.ico
    - src: contains all react code (Most of coding will be done here)
        - App.css (CSS for root react component)
        - App.js    (Root react component)
        - App.test.js (Tests for root react component)
        - index.css (Site wide/global CSS)
        - index.js  (Global JS or starting JS)
        - logo.svg  (React logo)
        - serviceWorker.js
    - .gitignore: to ignore files/folders
    - package.json: contains all dependencies. Can add package later to this file.
    - package-lock.json: Lock file, don't edit directly
    - README.md: README instructions file containing info about project

### 4.4 Starting up the Server
1. Starting up the server:
    - `npm start`
2. Webpack: CRA is built on top of "**webpack**", a JS utility that:
    - enables **module importing/exporting**
        - packages up all CSS/images/JS into a single file for browser
        - Dramatically reduces # of HTTP requests for performance
    - **Hot realoading**: launched application in browser will automatically reload when you change a source file.
        - Is smart and tries to only reload relevant files
    - Enables **easy testing and deployment**
3. Benefit with CRA: webpack is preconfigured and we don't need to setup everything from scratch.

### 4.5 ES2015 Modules Import and Export
1. **Modules**:
    - CRA uses ES2015 "modules"
    - This is a newer, standardized version of Node's `require()`
    - import is used to export/import classes/data/functions between JS files
2. Demo:
    - `import React from 'react';`: will look for react folder in node_modules directory
    - `import ReactDOM from 'react-dom';`: will look for react-dom folder in node_modules directory
    - `import helpful from './helpers';`: will look for helpers.js file in current directory(src)
3. Difference b/w `export default` and `export {}`
    - helpers.js
    - utils.js
    - functions.js
4. `import React, { Component } from 'react';`: Here React is the default export while Component is the non default export
5. **To Default or not?**:
    - Conventionally, default exports are used when there's a "most-likely" thing to exporting.
    - Ex: in a React component file: it's common to have the component be the default export.
    - You never need to make a default export,(default exports are totally optional) but it can be **helpful to indicate the most important thing in a file**.

### 4.6 Modules Example

### 4.7 CRA and React component conventions
1. Each React component goes in a separate file.
    - Ex: src/Car.js for Car component
    - src/House.js for House component
2. Better to make file name of component same as component's name.
    - must be capital case
3. Components extends Component(imported from React)
    - Export the component as default object
4. CRA skeleton assumes top object is App in App.js
    - Best to keep this. (So will be easy for future devs to read our code by identifying the starting point)

### 4.8 CSS and assets in CRA
1. CSS:
    - Make a CSS file for each React component
        - Ex: House.css for House component
    - Import it at the top of House.js
        - CRA will automatically load that CSS
    - Conventional to add className="House" onto House div
        - And use that as prefix for sub-items to style
        - Ex: .House, .House-title, .House-address etc.
2. Images:
    - Store images in src/folder with the components. Or a subfolder
    - Load them where needed, and use imported name where path should go

## 5. Pokedex project
### 5.1 Create project with CRA & Pokecard component
1. `npx create-react-app pokemon`
2. `cd pokemon`
3. `npm start`
4. clean up App.js
5. Create src/Pokecard.js

### 5.2 Create Pokedex - List component
1. Pokedex will render list of Pokecard components
2. Pokedex.js - loop through Pokecard
3. Add Pokedex to App.js

### 5.3 Styling

### 5.4 Adding HQ images

### 5.5 Pokegame component
1. Winning hand is decided by comparing experience of all cards in one hand.

### 5.6 Styling

## 6. React State - Intro
### 6.1 Intro to state
1. Concept of state in React
2. How to model/initialize state in React
3. How to use events to trigger state changes

### 6.2 React Dev Tools
1. "React Developer Tools" extension by Facebook - Add to Chrome or Firefox
2. It will add "Components" and "Profiler" tabs in dev tools window
3. Components shows all the components + details viz: props etc.

### 6.3 What is State
1. In any sufficiently advanced web app, the UI has to be stateful.
    - Ex: different screens for logged-in and logged-out users
    - Ex: clicking a button opens up a pop up. keeping track of if popup is open/closed.
    - Ex: state of accordions
2. Note: state of FE is not always directly tied up with BE.
3. State changes.
    - State is designed to change in response to events
4. What does State track?
    - 2 types of things state on the client/FE keeps track of:
        - **UI logic**: The changing state of the interface e.g. state of a modal (open/closed)
        - **Business logic**: The changing state of data e.g. inbox messages read/unread etc.
5. Conventional state management with **Vanialla/jQuery state**
    - earlier we kept track of state with jQuery by selecting DOM elements and adding attributes. And state was **inferred from the DOM** itself.
    - React state is the **opposite**.

### 6.4 Initializing State
1. **Revision:**
    - Component
        - building block of React
        - combines logic (JS) and presentation (JSX)
    - props
        - data passed to a component (or found via defaults: defaultProps)
        - immutable; component can not change it's own props
    - state
        - internal data specific to a component
        - data that changes over time
2. **What is React State?**
    - In React, state is an instance attribute on a component
    - It's always on **object** (POJO) Plain Old JavaScript Object, since you will want to keep track of several keys/values.
3. **Initial State**
    - State should be initialized as soon as the component is created.
    - So, should be initialized in constructor function.
    - Note: if component is stateless, we can emit the constructor function.
    - constructor takes one argument, props. Ex: `constructor(props){ super(props) }`
    - We must call `super(props)` at start of a constructor, which **registers** our class as a React component.
    - After initialization, we can access state using `this.state`
4. Demo
    - Add Game.js
    - states can be checked out in dev tools by selecting a component
    - Note: With state, initialization is mandatory. With props: initialization is not reqd. By default: this.props exist but this.state is undefined.

### 6.5 Initializing State - Alternate shortcut
1. Using "proposal class properties"
    - creating a state property directly inside class. not inside constructor like earlier.
    - Not a JS standard way
    - But does the job with less amount of code
    - **Imp Note:** Not real JS. so the solution works only with babel. If our app is not created using CRA, we will have to add some extra babel settings by adding a plugin called: plugin-proposal-class-properties
    - Docs: https://babeljs.io/docs/en/babel-plugin-proposal-class-properties (added by default for CRA)
    - Test code @ https://babeljs.io/repl to check how babel converts shortcut into JS valid code by adding constructor and defining property.

### 6.6 super() vs super(props)
1. constructor takes one argument, props. Ex: `constructor(props){ super(props) }`
2. We must call `super(props)` at start of a constructor, which **registers** our class as a React component.
3. **What & Why super()?**
    - when we extend/derive a component, we must call the constructor of parent class before calling the constructor of child class.
    - super() is used to call the constructor of parent class.
    - without super() it will throw error: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    - Demo: super.js
4. **What & Why super(props)?**
    - Demo: SuperProps.js
    - Plain React componenet will work fine with just super() but if the component has props then we will have access to props in anywhere in class viz render method but not in constructor.
    - to get access to props in constructor: we must use super(props)

### 6.7 Setting state correctly with this.setState method
1. Never directly change the state
    - `this.state.score = 45;`
2. use `this.setState` method:
    - `this.setState()` is the built-in React method of changing a component's state.
    - Can call in any instance method except the constructor
    - Takes an object describing the state changes
    - Patches state object - keys that you didn't specify won't change
4. why this.setState and not this.state.score?
    - Reason 1: state change is **asynchronous**. Thus, better to use setState method where we can have a callback to do something after the state has been changed. We won't have callback with directly changing the state.
    - Reason 2: Docs: https://reactjs.org/docs/react-component.html#setstate
    - Think of setState() as a request rather than an immediate command to update the component. For better perceived performance, React may delay it, and then update several components in a single pass. React does not guarantee that the state changes are applied immediately.
    - If we try to change state directly, then it will try to immediately change & re-render the component: which is not suggested. (For performance reasons)
    - Components re-renders when their state changes. (even if the value is not used in render)

### 6.8 Click events in React
1. **React Events:**
    - State most commonly changes in direct response to some event.
    - In React, every JSX element has built-in attributes representing every kind of browser event.
    - They are camel-cased. Ex: onClick and take callback functions as event listeners.
2. Demo: Click event: Button.js
3. Demo: this keyword: BrokenClick.js
    - this is undefined. Error: Cannot read property 'setState' of undefined
    - React calls handleClick method on clicking btn
    - But it doesn't remember to call it on our instance
    - Thus, it calls the method handleClick "out of context"
    - Solution: **.bind()** the method. So that our method is bind to our instance.
4. More ways to bind:
    - Class Properties: `handleClick = () => {}`: arrow fn in class properties
    - Bind in Render: `onClick={this.handleClick.bind(this)}`
    - Arrow Function in Render: `onClick={() => this.handleClick()}`
    - Doc: https://reactjs.org/docs/faq-functions.html#how-do-i-bind-a-function-to-a-component-instance

### 6.9 Click events in React - Alternate Syntax
1. Class Properties: `handleClick = () => {}`: arrow fn in class properties
    - Note: This babel class properties and not real JS
    - Check compiled code at: https://babeljs.io/repl
    - **Note:** So, if our app is not created with CRA and doesnot have babel, it won't work by default. We will have to add extra babel settings.

### 6.10 State Clicker
1. Clicker.js - On button click - generate random number and if number = 7, hide button and show message.

### 6.11 State vs Props, State as Props - Summary
1. State
    - term: state
    - structure: POJO{}
    - mutable: Yes
    - purpose: stores changing component data
2. Props
    - term: props
    - structure: POJO{}
    - mutable: No
    - purpose: stores component configuration
3. State as Props:
    - A common practice is: a stateful/smart parent component passing down it's state values as props to stateless/dumb child components
    - This concept is known as "downward data flow".
    - Component gets simpler as you go down the component hierarchy, and parents tend to be more stateful than their children.

## 7. Dice Game with React State
### 7.1 Project setup
1. `npx create-react-app dice`, `npm run start`

### 7.2 Create Die component
